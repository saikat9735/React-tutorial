import React, { Component } from "react";

class UseState extends Component{
    constructor(){
        super()
        this.state = {
            message:'Welcome Visitors'
        }
    }

    changeMessage(){
        this.setState({
            message:"Thank You for Subcribe"
        })
    }

    render(){
        return(
            <div>
                <h1> {this.state.message} </h1>
                <button onClick={()=> this.changeMessage() }>Subcribe</button>
            </div>
        )
    }
}
export default UseState;