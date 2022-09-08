import React from "react";
import {Player} from "./Player";

export class Players extends React.Component<any, any> {

    public render() {
        return (<div className={"players"}>
            <Player
                id={1}
            />
            <Player
                id={2}
            />
        </div>)
    }
}
