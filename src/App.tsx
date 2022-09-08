import * as React from 'react';
import './App.css';
import {Winner} from "./components/Winner";
import {Players} from "./components/Players";

interface IProps {
}

export class App extends React.Component<IProps, any> {

    public render() {
        return (
            <div className={"app"}>
                <header className={"header"}>Stone Scissors Paper - Game</header>
                <div className={"body"}>
                    <Players />
                    <Winner />
                </div>
                <footer className={"footer"}>&copy; Daniel M&uuml;ller</footer>
            </div>
        );
    }
}

export default App;
