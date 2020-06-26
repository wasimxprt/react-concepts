import React, { Component } from 'react';
import PropTypes from 'prop-types';

const HOCComponent = OriginalComponent => {
    class hoc extends Component {
        constructor(props){
            super(props)

            this.state = {
                count:0
            }
        }

        incrementCount = () =>{
            this.setState(prevState => {
                return {count:prevState.count +1}
            })
        }
        render() {
            return (
                <div>
                    <OriginalComponent count={this.state.count} increment={this.incrementCount} />
                </div>
            );
        }
    }

    return OriginalComponent
}


export default HOCComponent;