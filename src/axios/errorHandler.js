// Used as a HOC (function) to handle the requests 
import React, { Component } from 'react'

const errorHandler = (WrappedComp, axiosInstance) => {
     return class extends Component {

        componentWillMount(){
            this.reqInterceptor = axiosInstance.interceptors.request.use(req=>{
                console.log('Request Succ:', req.baseURL + req.url)
                return req
            })
            this.resInterceptor = axiosInstance.interceptors.response.use(res => res, error=>{
                console.log(error)
            })
        }
        //remove interceptor to prevent memory leak
        componentWillUnmount(){
            axiosInstance.interceptors.request.eject(this.reqInterceptor)
            axiosInstance.interceptors.response.eject(this.resInterceptor)
        }

        render() {
            return (
                <WrappedComp {...this.props} />
            )
        }
    }
}
export default errorHandler