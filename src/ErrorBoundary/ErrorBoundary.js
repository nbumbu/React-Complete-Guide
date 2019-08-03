import React, {Component} from 'react';

class ErroBoundary extends Component {
    state = {
        hasError: false,
        errorMsg: ''
    }

    componentDidCatch = (error, info) => {
        this.setState({
            hasError: true,
            errorMsg: error
        });
    }

    render() {
        if (this.state.hasError) {
            return (
                <h1>{this.state.errorMsg}</h1>
            )
        } else {
            return this.props.children;
        }
    }
}

export default ErroBoundary;