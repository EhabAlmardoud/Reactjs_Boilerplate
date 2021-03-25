import React, { Component } from 'react'

// This is HOC to catch an error on componants who you are not sure will work always
// use: <ErrorBoundary> <Comp /> </ErrorBoundary>
export default class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }

    componentDidCatch = (error, info) => {
        this.setState({ hasError: true, errorMessage: error })
    }

    render() {
        const {hasError, errorMessage} = this.state
        if(hasError){
            return <h1>{errorMessage}</h1>
        } else { return this.props.children}
    }
}
