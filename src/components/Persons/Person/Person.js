import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';

class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        this.inputElementRef.current.focus();
    }

    render() {
        console.log('[Person.js] is rendering...........');
        return (

            <Aux>
                <AuthContext.Consumer>
                    {
                        (context) => {
                            return context.authetificated ? <p>Authentificated</p> : <p>Please Log In!</p>
                        }

                    }
                </AuthContext.Consumer>
                <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} year old!</p>
                <p>{this.props.children}</p>
                <input
                    // ref={(inputEl) => {this.inputElement = inputEl}} 
                    ref={this.inputElementRef}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name} />
            </Aux>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person, classes.Person);