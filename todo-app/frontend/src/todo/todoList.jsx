import React from 'react'
import IconButton from '../template/iconButton'

export default props =>{
   
    const renderRows = () =>{
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton style='success' icon='check'
                        onClick={() => props.handleMarkAsDone(todo)} hide={todo.done}></IconButton>
                    <IconButton style='warning ml-1' icon='undo'    
                        onClick={() => props.handleMarkAsPending(todo)} hide={!todo.done}></IconButton>
                    <IconButton style='danger ml-1' icon='trash-o' hide={!todo.done}
                        onClick={() => props.handleRemove(todo)}></IconButton>
                </td>
            </tr>
        ))
    }

   return(
       <table className="table">
           <thead>
               <tr>
                   <th>Descrição</th>
                   <th className='tableActions'>Ações</th>
               </tr>
           </thead>
           <tbody>
               {renderRows()}
           </tbody>
       </table>
   )
}