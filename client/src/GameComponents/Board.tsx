import React from "react";
import ReactDOM from 'react-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCoffee, faHandPaper, faHandRock, faHandScissors} from '@fortawesome/free-solid-svg-icons'
import './Board.css';

function BoardHeader() {
    return <div className="board-header">
        Rock paper scissors game
    </div>;
}

function BoardBody() {
    const handRock = <FontAwesomeIcon icon={faHandRock}/>
    const handPaper = <FontAwesomeIcon icon={faHandPaper}/>
    const handScissors = <FontAwesomeIcon icon={faHandScissors}/>
    return <div className="board-body">
        <span className="sign-element">{handRock}</span><span className="sign-element">{handScissors}</span><span
        className="sign-element">{handPaper}</span></div>
}

export class Board extends React.Component<{}, {}> {
    constructor(props: any) {
        super(props);
    }

    // state = {apiResponse: ""};


    // callApi() {
    //     fetch("http://localhost:9000/users")
    //         .then(res => res.text())
    //         .then(res => this.setState({apiResponse: res}));
    // }

    componentDidMount() {
        // this.callApi();
    }


    render() {
        return (<div className="board-container">
            <BoardHeader/>
            <BoardBody/>
        </div>);
    }

}
