import React from "react";
import {PlayerService} from "../service/PlayerService";
import {Symbol} from "./Symbol";
import {AppContext} from "../application/AppContext";

interface IState {
    name: string;
    symbol: string;
    id: number | undefined;
}

export interface IProps {
    type: string;
}

export class Player extends React.Component<IProps, IState> {

    constructor(props: any) {
        super(props);
        this.state = {
            name: "",
            symbol: "",
            id: undefined,
        }
    }

    componentDidMount() {
        this.cratePlayer();
    }

    private cratePlayer = async() => {
        const result = await PlayerService.put(this.props.type);
        const id = result.id;
        const name = result.name;
        const symbol = result.symbol?.symbolValue;
        this.setState({
            name: name,
            symbol: symbol,
            id: id,
        });
        this.props.type === "bot" ? AppContext.get().botId = id : AppContext.get().playerId = id;
    }

    private async updatePlayer(value: string) {
        if (value.length > 0) {
            const result = await PlayerService.patch(this.state.id + "/name/" + value);
            const name = result.name;
            const symbol = result.symbol?.symbolValue;
            this.setState({
                name: name,
                symbol: symbol,
            });
            const playButton = document.getElementById("play")!;
            if(name && symbol) {
                playButton.classList.remove( "disabled");
                playButton.removeAttribute('disabled');
            } else {
                playButton.setAttribute('disabled', '');
            }
        }
    }

    private getNameInput = () => {
        return <input
            className={"input roundBorder"}
            type={"text"}
            id={"name_" + this.state.id}
            placeholder={"Tpye name"}
            value={this.state.name ? this.state.name : ""}
            disabled={this.props.type === "bot"}
            maxLength={10}
            onChange={event => this.updatePlayer(event.target.value)}
        />
    }

    public render() {
        return (
            <div className={"player"}>
                {this.getNameInput()}
                <Symbol
                    symbolValue={this.state.symbol}
                    playerId={this.state.id}
                    type={this.props.type}
                />
            </div>
        );
    }

}
