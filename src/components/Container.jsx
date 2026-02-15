import React from 'react'

const Container = ({children , className}) => {
    return (
        <div className={`lg:max-w-292.5 mx-auto ${className}`}>{children}</div>
    )
}

export default Container