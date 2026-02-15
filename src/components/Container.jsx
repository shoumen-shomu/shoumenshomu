import React from 'react'

const Container = ({children , className}) => {
    return (
        <div className={`lg:max-w-292.5 max-w-97.5 lg:mx-auto ${className}`}>{children}</div>
    )
}

export default Container