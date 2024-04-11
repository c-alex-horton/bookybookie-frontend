// Title Component

import * as React from 'react'

const Title: React.FC<{children?: React.ReactNode}> = ({children}) => {
    return (
        <h1 className="text-6xl font-bold">{children}</h1>
    )
}

export default Title
