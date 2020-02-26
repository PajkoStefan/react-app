import React, {Component} from 'react';
import './App.css';
// import Person from './components/Person';
import UserInput from "./components/assignment-1/UserInput";
import UserOutput from "./components/assignment-1/UserOutput";

class App extends Component {

    //5
    state = {
        username: "StefanPajko2"
    };

    //6
    inputChangeHandler = (event) => {
        this.setState({
            username : event.target.value
        });
    };

    render() {
        return (
            <div className="App">
                {/*1-4*/}
                <UserInput/>
                <UserOutput paragraph1="paragraph 1" paragraph2="paragraph 2"/>
                <UserOutput paragraph1="tralala" paragraph2="blablabla"/>
                <UserOutput paragraph1="waaaaaaaaaa" paragraph2="zaaaaaaaaaaa"/>
                <UserOutput paragraph1="1 text text text 1" paragraph2="2 text text text 2"/>
                <UserOutput username="StefanPajko"/>

                {/*7-8*/}
                <UserInput changed = {this.inputChangeHandler} currentName ={this.state.username} />
                {/*5*/}
                <UserOutput username={this.state.username}/>

            </div>
        )
    }

}

export default App;
