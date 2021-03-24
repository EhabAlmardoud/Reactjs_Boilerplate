import React, { Component } from "react"
import { Switch, Route, NavLink } from 'react-router-dom'

class App extends Component {
    render() {
        return <div>
            <h1>Welcome to my boilerplate!</h1>
            <Switch>
                <Route path='/firstRoute'>
                    <h2>This is the first route! React Router is working!</h2>
                    <NavLink to='/' activeClassName="hurray">
                        <h2>Back to home</h2>
                    </NavLink>
                </Route>
                <Route path='/'>
                    <h2>This is the home Page</h2>
                    <NavLink to='/firstRoute' activeClassName="hurray">
                        <h2>Go to the first route</h2>
                    </NavLink>
                </Route>
            </Switch>
        </div>
    }
}


export default App