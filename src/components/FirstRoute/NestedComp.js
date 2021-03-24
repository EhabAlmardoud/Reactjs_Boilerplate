import React from 'react'
import { withRouter } from 'react-router-dom'

// This compunent is to show how to get access for the history,location,match props 
const NestedComp = (props) => {

    const handleClick = () => {
        props.history.push('/')
    }

    return (
        <div>
            This is a nested component!!
            <button onClick={() => handleClick()}>Home</button>
        </div>
    )
}

export default withRouter(NestedComp)