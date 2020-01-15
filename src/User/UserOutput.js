import React from 'react';

const userOutput = (props) => {
    return (
        <div>
            <p>Hello, {props.name}</p>
            <p>It's nice to see you again</p>
        </div>
    )
}

export default userOutput;