import React from 'react'
import {filhosComProps} from '../utils/utils'

export default props =>
<div>
    {filhosComProps(props)}
    {/* {React.Children.map(props.children, filho =>{
        return React.cloneElement(filho, { ...props})
    })} */}
    {/* {React.cloneElement(props.children, { ...props})} */}
    
</div>