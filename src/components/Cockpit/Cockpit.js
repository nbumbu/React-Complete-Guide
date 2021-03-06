import React, { useEffect, useRef, useContext } from 'react';
import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';
const cockpit = (props) => {
    const toggleBtnRef = useRef(null);

    const authContext = useContext(AuthContext);

    console.log(authContext.authetificated)

    useEffect(() => {// Use effect executes for every render cycle
        console.log('[Cockpit.js] useEffect')
        // http request
        // setTimeout(() => {
        //     alert('Saved data to cloud!');
        // }, 1000);
        toggleBtnRef.current.click();
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        };
    }, []);

    useEffect(() => {

        console.log('[Cockpit.js] 2nd useEffect')
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        };
    });

    let btnClass = '';
    let assignedClasses = [];

    if (props.showPersons) {
        btnClass = classes.Red;
    }
    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red);
    }

    if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold);
    }
    return (
        <div className={classes.Cockpit}>
            <h1>I am a {props.title} App!!!</h1>
            <h2 className={assignedClasses.join(' ')}>This is really working!</h2>
            <button
                ref={toggleBtnRef}
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
            <button onClick={authContext.login}>Log me in</button>
        </div>

    )
};

export default React.memo(cockpit); // store a snapshot of this component and it will permit to change it only when it's input was changed