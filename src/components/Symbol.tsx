import React from "react";
// @ts-ignore
import {PlayerService} from "../service/PlayerService";

export interface IState {
    symbol: string,
}

export interface IProps {
    symbolValue: string
    playerId: number | undefined
}

export class Symbol extends React.Component<IProps, IState> {

    constructor(props: any) {
        super(props);
        this.state = {
            symbol: props.symbolValue,
        };
    }

    private async updatePlayer(value: string) {
        const result = await PlayerService.patch(this.props.playerId + "/symbol/" + value);
        const name = result.name;
        const symbol = result.symbol?.symbolValue;
        this.setState({
            symbol: symbol,
        });
        document.getElementById("play")!.classList.remove((name && symbol) ? "disabled" : "");
    }

    public render() {
        return (
            <div>
                {this.props.playerId === 1 ? (
                        <article id={"symbol_1"}
                            className={"symbol roundBorder light fontColor " + (this.props.symbolValue ?
                                this.props.symbolValue.toLowerCase() : "none")}
                        >
                            <h1 id={"symbolValue_1"} className={"normalFont"}>{this.props.symbolValue ? this.props.symbolValue : "?"}</h1>
                        </article>)
                    : (
                        <select className={"select roundBorder light fontColor " + (this.state.symbol ?
                            this.state.symbol.toLowerCase() : this.props.symbolValue?.toLowerCase())}
                                onChange={event => this.updatePlayer(event.target.value)}
                                value={this.state.symbol ? this.state.symbol : this.props.symbolValue}
                                id={"symbol_" + this.props.playerId}
                                >
                            <option disabled={true} placeholder={""} value="" >Select symbol</option>
                            <option value="STONE" >STONE</option>
                            <option value="SCISSORS">SCISSORS</option>
                            <option value="PAPER">PAPER</option>
                            <option value="FOUNTAIN">FOUNTAIN</option>
                        </select>
                    )}
            </div>)
    }

}

