import React, { Component } from 'react'

const errorHandler = (WrappedComp, axiosInstance) => {
     return class extends Component {

        componentWillMount(){
            axiosInstance.interceptors.request.use(req=>{
                console.log('Request Succ:', req.baseURL + req.url)
                return req
            })
            axiosInstance.interceptors.response.use(res => res, error=>{
                console.log(error)
            })
        }

        render() {
            return (
                <WrappedComp {...this.props} />
            )
        }
    }
}
export default errorHandler