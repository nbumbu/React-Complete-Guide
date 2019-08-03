import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }
    let assignedClasses = [];
    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }

    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }
    return (
        <div className={classes.Cockpit}>
            <h1>I am a {props.title} App!!!</h1>
            <h2 className={assignedClasses.join(' ')}>This is really working!</h2>
            <button className={btnClass} onClick={props.clicked}>Toggle Persons</button>
        </div>

    )
};

export default cockpit;