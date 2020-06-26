import React, { Component } from 'react';
import { UserConsumer } from './useContext';

class ComponentB extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    username => {
                    return <div>ComponentB {username}</div>
                    }
                }
                </UserConsumer>
        );
    }
}

export default ComponentB;