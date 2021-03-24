import React, { Component } from "react"
import { Switch, Route, NavLink } from 'react-router-dom'
import FirstRoute from './FirstRoute'
import AxiosTest from './AxiosTest'

// React Route using a <Switch> to to match the path and return the <Route>
// Only Components loaded through <Route> have access for the history,location,match props 
class App extends Component {
    render() {
        return <div>
            <h1>Welcome to my boilerplate!</h1>
            <Switch>
                <Route path='/firstRoute' component={FirstRoute} />

                <Route path='/' >
                    <div>
                        <h2>This is the home Page</h2>
                        <NavLink to='/firstRoute' activeClassName="hurray">
                            <h2>Go to the first route</h2>
                        </NavLink>
                        <AxiosTest />
                    </div>
                </Route>
            </Switch>
        </div>
    }
}


export default App