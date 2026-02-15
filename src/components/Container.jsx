import React from 'react'

const Container = ({children , className}) => {
    return (
        <div className={`lg:max-w-292.5 w-full px-4 lg:px-0 mx-auto ${className}`}>{children}</div>
    )
}

export default Container