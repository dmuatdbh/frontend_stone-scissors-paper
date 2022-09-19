import React from "react";
import {Player} from "./Player";

export class Players extends React.Component<any, any> {

    public render() {
        return (<div className={"players"}>
            <Player
                type={"bot"}
            />
            <Player
                type={"real"}
            />
        </div>)
    }
}
