import React, {Component} from 'react';
import './App.css';
import Validation from "./components/assignment-2/Validation";
import Char from "./components/assignment-2/Char";

class App extends Component {


    state = {
        userInput: '',
        lengthOfText: 0
    };

    //1
    lengthOfTextHandler = (event) => {
        this.setState({
            userInput: event.target.value,
            lengthOfText: event.target.value.length
        });
    };

    //6
    deleteCharacterHandler = (index) => {
        const text = this.state.userInput.split('');
        text.splice(index, 1);
        const updatedText = text.join('');
        this.setState({
            userInput: updatedText
        });
    };

    render() {
        let style = {
            border: "1px solid red",
            padding: "5px"
        };
        //5
        //index is not a good key, use only for this example
        const charList = this.state.userInput.split('').map((char, index) => {

            return <Char
                character={char}
                key={index}
                //6
                clicked={() => this.deleteCharacterHandler(index)}
            />;
        });

        return (
            <div className="App">
                {/*1*/}
                <input type="text"
                       name="text"
                       onChange={this.lengthOfTextHandler}
                       value={this.state.userInput}
                />
                <p className="display-user-input" style={style}>
                    Text:
                    <br/>
                    {this.state.userInput}
                </p>
                {/*2*/}
                <Validation lengthOfText={this.state.lengthOfText}/>
                {/*4*/}
                {charList}
            </div>
        )
    }

}

export default App;
