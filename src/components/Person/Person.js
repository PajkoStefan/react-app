import React from "react";
import './style.module.css';
// import styled from 'styled-components';
import classes from './style.module.css'

const Person = (props) => {

    return (
        <div className={classes.person}>

            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            < p> {props.children}s
            </p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );
};

export default Person;