import React, { Component } from 'react'

export default class LifeCycle extends Component {

    constructor(){
        console.log('inside construder....')
        super();
        this.state={
            name: 'SIT'
        }
    }

    static getDerivedStateFromProps(props, state){
        console.log("getDerivedStateFromProps");
        console.log('state is: ' + state);
        console.log('props is: ' + props);
        return {
            name: props.LastName
        }
    }

    componentDidMount(){
        // ApI Call
        console.log("This is compoenent Did Mount");
        this.setState({
            name: "Sahajanand"
        })
    }

    shouldComponentUpdate(){
        console.log("inside ShouldComponentUpdate...")
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, PrevState){
        console.log("inside getSanpShotBeforeUpdate......");
        console.log("prevState: ", PrevState);
        return PrevState;
    }

    componentDidUpdate(prevProps, PrevState, sanpshot){
        console.log("inside componentDidUpdate......");
        console.log('snapshot:', sanpshot);
    }

    componentWillUnmount(){
        // Remove Evenent Listers
        // Clear timeouts
    }

    render() {
        console.log("inside Render.....")
        return (
            <div>
                <h1>Welcome to {this.state.name}</h1>
            </div>
        )
    }
}
