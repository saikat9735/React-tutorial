import React from "react";

const Hello = () => {
    return (
        <div>
            <h1>
                this is an example of js code
            </h1>
        </div>
    )
}

const Hello1 = () => {
    return (React.createElement('div', null, React.createElement('h1', null, 'This is an example of jsx code ')))
}

export {Hello,Hello1}
