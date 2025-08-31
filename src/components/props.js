import React from 'react';
const PropsExample = (props)=>{
    return(
        <div>
            <h1>My name is {props.name}</h1>
            <p>{props.children}</p>
        </div>
    )
}

export default PropsExample;