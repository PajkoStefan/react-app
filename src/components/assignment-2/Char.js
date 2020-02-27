import React from 'react';

//4
const Char = (props) => {

    let style ={
        display: "inline-block",
        padding: "16px",
        textAlign: "center",
        margin: "16px",
        border: "1px solid black"
    };

    return (

        <div className="char" style={style} onClick={props.clicked}>
            <p>{props.character}</p>
        </div>
    );
};

export default Char;