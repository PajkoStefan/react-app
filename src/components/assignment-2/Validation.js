import React from 'react';

//2
const Validation = (props) => {

    //3
    let validationMessage = "Text too short, less than 5 characters";

    if(props.lengthOfText >= 5)
        validationMessage = "Text is enough, more than 5 characters";



    return (
        <div className="validation-message">
            {/*3*/}
            <p className="validation-message-paragraph">
                {validationMessage}
                <br/>
                Characters: {props.lengthOfText}
            </p>
        </div>
    );
};

export default Validation;