import React from 'react';

const UserOutput = (props) =>{
        return (

            <div className="user-output">
                <p>{props.paragraph1}</p>
                <p>{props.paragraph2}</p>
                <div className="username-display">
                    <p>{props.username}</p>
                </div>
            </div>

        );
};

export default UserOutput;