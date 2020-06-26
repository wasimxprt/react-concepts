import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Memo from './Memo';

class ParentComponent extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            name:"wasim"
        }
    }

    clickHandler = () => {
        this.setState({
            name:"sayyed"
        })
    }
    render() {
        console.log("Rendering PArent")
        return (
            <div>

                <button onClick={this.clickHandler}>Update state</button>
                <br />

                Parent Component
                <Memo name={this.state.name}/>
                
            </div>
        );
    }
}

ParentComponent.propTypes = {

};

export default ParentComponent;