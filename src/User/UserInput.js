import React from 'react';

const userInput = (props) => {
    return (
        <input type="text" value={props.default} onChange={props.changed}/>
    )
}

export default userInput;