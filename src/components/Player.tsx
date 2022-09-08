import React from "react";
import {PlayerService} from "../service/PlayerService";
import {Symbol} from "./Symbol";

interface IState {
    name: string;
    symbol: string;
}

export interface IProps {
    id: number | undefined;
}

export class Player extends React.Component<IProps, IState> {

    private readonly id: number | undefined;

    constructor(props: any) {
        super(props);
        this.id = this.props.id;
        this.state = {
            name: "",
            symbol: ""
        }
    }

    componentDidMount() {
        this.getPlayer();
    }

    private getPlayer = async() => {
        const result = await PlayerService.get("" + this.props.id);
        const name = result.name;
        const symbol = result.symbol?.symbolValue;
        this.setState({
            name: name,
            symbol: symbol,
        });
    }

    private async updatePlayer(value: string) {
        if (value.length > 0) {
            const result = await PlayerService.patch(this.props.id + "/name/" + value);
            const name = result.name;
            const symbol = result.symbol?.symbolValue;
            this.setState({
                name: name,
                symbol: symbol,
            });
            if(name && symbol) {
                document.getElementById("play")!.classList.remove( "disabled");
            }
        }
    }

    private getNameInput = () => {
        return <input
            className={"input"}
            type={"text"}
            id={"name_" + this.props.id}
            placeholder={"Tpye name"}
            value={this.state.name ? this.state.name : ""}
            disabled={this.props.id === 1}
            maxLength={14}
            onChange={event => this.updatePlayer(event.target.value)}
        />
    }

    public render() {
        return (
            <div className={"player"}>
                {this.getNameInput()}
                <Symbol
                    symbolValue={this.state.symbol}
                    playerId={this.props.id}
                />
            </div>
        );
    }

}
