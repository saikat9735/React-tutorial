import React, { Component } from "react";

class PropsInClass extends Component {
    render() {
        return (
            <div>
                <h1>Name is : {this.props.name}</h1>
                {this.props.children}
            </div>

        )
    }
}

export default PropsInClass;