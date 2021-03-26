import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import NestedComp from './NestedComp'
import { connect } from 'react-redux'
import * as actionCreaters from '../../store/actions/'
class FirstRoute extends Component {

    render() {
        console.log(this.props)
        return (
            <div>
                <h2>This is the first route! React Router is working!</h2>
                <h2>Number of times back to home (redux): {this.props.firstState}</h2>
                <NestedComp incOne={this.props.incOne}/>
                <NavLink to='/' activeClassName="hurray">
                    <h2>Back to home</h2>
                </NavLink>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        firstState: state.fr.firstState
    }
}

const mapDispatchToProps = dispatch => {
    return {
        incOne: () => dispatch(actionCreaters.firtsAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FirstRoute)
