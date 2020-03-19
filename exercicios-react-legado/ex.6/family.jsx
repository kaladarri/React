import React from 'react'
import { childrenWithProps } from '../util/reactUtils'

export default props =>(
    <div>
        <h1>Família <strong>{props.lastName}</strong></h1>
        { childrenWithProps(props) }
    </div>
)