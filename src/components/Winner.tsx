import React from "react";
import {PlayerService} from "../service/PlayerService";

export interface IState {
    name: string;
    symbol: string;
    hidden: boolean;
    botSymbol: string;
}

export class Winner extends React.Component<any, IState> {

    constructor(props: any) {
        super(props);
        this.state = {
            name: "",
            symbol: "",
            hidden: true,
            botSymbol: "",
        }
    }

    public render() {
        return (
            <div className={"winner"}>
                <button id={"play"} title={"Type name and select symbol to play"} className={"button roundBorder disabled"} onMouseUp={this.getWinner}>Play</button>
                <div className={this.state.hidden ? "hidden" : ""}>
                    <p className={"floating_text strong left roundBorder light fontColor " + (this.state.symbol ?
                        this.state.symbol?.toLowerCase() : "none")
                    }>
                        {(this.state.name ? this.state.name : "???") + " wins"}
                    </p>
                </div>
            </div>
        );
    }

    private getWinner = async() => {
        const result = await PlayerService.get("winner");
        const name = result.name;
        const symbol = result.symbol?.symbolValue;
        this.setState({
            name: name,
            symbol: symbol,
            hidden: false,
        });
        this.updateBot();
    }

    private updateBot = async() => {
        const result = await PlayerService.get("1");
        const symbol = result.symbol?.symbolValue;
        ["stone", "scissors", "paper", "fountain", "none"].forEach((cssClass) =>
            document.getElementById("symbol_1")!.classList.remove(cssClass ));
        document.getElementById("symbol_1")!.classList.add(symbol.toLowerCase());
        document.getElementById("symbolValue_1")!.textContent = symbol;
    }
}

