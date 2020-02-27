import React, {Component} from "react";

// function Person() {
//
//     return (
//         <div class="person">
//             <h1>Stefan Anastasovski</h1>
//             <p>Your Age: 24</p>
//         </div>
//     );
// }

//or es6

// export const Person = ....
// const Person = (props) => {
//     return (
//         <div className = "person">
//             <h1 ><span>Name: {props.name}</span> <br /> Surname: {props.surname}</h1>
//             <p>My Age: {props.age}</p>
//         </div>
//     );
// };
class Person extends Component{
    render()     {
        return (
            <div className = "person">
                <h1 ><span>Name: {this.props.name}</span> <br /> Surname: {this.props.name}</h1>
                <p>My Age: {this.props.age}</p>
            </div>
        );
    }
}

export default Person;