import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Refs extends Component {
    constructor(props){
        super(props)

        this.inputRef = React.createRef();
    }

    componentDidMount(){
        this.inputRef.current.focus()
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} />
            </div>
        );
    }
}

Refs.propTypes = {

};

export default Refs;