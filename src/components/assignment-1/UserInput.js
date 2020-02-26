import React from 'react';
import './style.css'

const UserInput = (props) => {

    return (
        <div className="user-input">
            <input type="text"
                   name="input"
                   value={props.currentName}
                   onChange={props.changed}
                   className="user-input-field"
            />
        </div>
    );
};

export default UserInput;