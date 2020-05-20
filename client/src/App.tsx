import React from 'react';
import './App.css';
import {Board} from "./GameComponents/Board";

// function App() {
// }
//
// export default App;
//

export class App extends React.Component<{}, {}> {
    constructor(props: any) {
        super(props);
        this.state = {apiResponse: ""};
    }



    render() {
        return (
            <Board/>
        );
    }

}
