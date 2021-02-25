import React from 'react'
import {Link} from 'gatsby'
import {ErrorWrap} from './404.style'

const ErrorArea = () => {
    return (
        <ErrorWrap>
            <h1>404</h1>
            <h2>Page not found</h2>
            <Link to="/">Go to home</Link>
        </ErrorWrap>
    )
}

export default ErrorArea;