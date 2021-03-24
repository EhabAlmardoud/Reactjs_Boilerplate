import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import NestedComp from './NestedComp'

export default class FirstRoute extends Component {
    render() {
        return (
            <div>
                <h2>This is the first route! React Router is working!</h2>
                <NestedComp />
                <NavLink to='/' activeClassName="hurray">
                    <h2>Back to home</h2>
                </NavLink>
            </div>
        )
    }
}
