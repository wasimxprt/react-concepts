import React, { Component } from 'react';
import hoc from "./hoc"

class ClickCounter extends Component {
    render() {
        const {count, increment} = this.props
        return (
            <div>
                Counter: {count}
                <button onClick={increment}>Click me</button>
            </div>
        );
    }
}

export default hoc(ClickCounter);