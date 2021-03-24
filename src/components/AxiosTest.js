import React, { Component } from 'react'
import instance from '../axios/instances'
import errorHandler from '../axios/errorHandler.js'
import { map, get } from 'lodash'

class AxiosTest extends Component {

    state = {
        posts: [],
        users: []
    }

    componentDidMount() {
        instance.get('', { params: { _limit: 10 } })
            .then(r => { this.setState({ users: r.data }) })
            .catch(error => { console.log(error) })
    }

    renderData = (data) => {
        return map(data, (p) => {
            return <p key={p.id}>{get(p, 'id', '')}</p>
        })
    }

    render() {
        const {posts, users} = this.state
        return (
            <div>
                <div>
                    Data returned from Axios Instances:
                    {this.renderData(users)}
                </div>
            </div>
        )
    }
}

export default errorHandler(AxiosTest, instance)