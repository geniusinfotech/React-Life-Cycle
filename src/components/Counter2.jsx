import React, { Component } from 'react'

export class Counter2 extends Component {
    shouldComponentUpdate(nextProps, nextState){
        if(this.props.value !== nextProps.value){
            return true;
        }
        return false;
    }
    render() {
        console.log("Calling Counter2....");
        return (
            <div>
                <h2>Counter 2 is: </h2>
                <h3>{this.props.value}</h3>
                <button onClick={this.props.onClick}> Add </button>
            </div>
        )
    }
}

export default Counter2
