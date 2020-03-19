import React from 'react'
import ReactDom from 'react-dom'
import  Primeiro, { Segundo } from './componente'

ReactDom.render(
   <div>
       <Primeiro/>
       <Segundo/>
   </div>

, document.getElementById('app'))