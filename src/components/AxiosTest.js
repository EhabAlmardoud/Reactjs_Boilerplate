import React, { Component } from 'react'
import axios from 'axios'
import { map, get } from 'lodash'

export default class AxiosTest extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: 10
            }
        })
            .then(r => {
                this.setState({ posts: r.data })
            })
            .catch(error => {
                console.log(error)
            })
    }

    renderData = () => {
        const { posts } = this.state
        return map(posts, (p) => {
            return <p>{get(p, 'id', '')}</p>
        })
    }

    render() {
        return (
            <div>
                Data returned from Axios:
                <div>
                    {this.renderData()}
                </div>
            </div>
        )
    }
}
