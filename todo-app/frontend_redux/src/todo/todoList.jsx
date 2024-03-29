import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import IconButton from '../template/iconButton'
import { markAsDone, markAsPending, remove } from './todoActions'

const TodoList = props =>{
   
    const renderRows = () =>{
        const list = props.list || []
        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? 'markedAsDone' : ''}>{todo.description}</td>
                <td>
                    <IconButton style='success' icon='check'
                        onClick={() => props.markAsDone(todo)} hide={todo.done}></IconButton>
                    <IconButton style='warning ml-1' icon='undo'    
                        onClick={() => props.markAsPending(todo)} hide={!todo.done}></IconButton>
                    <IconButton style='danger ml-1' icon='trash-o' hide={!todo.done}
                        onClick={() => props.remove(todo)}></IconButton>
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

const mapStateToProps = state => ({list : state.todo.list })
const mapDispatchToProps = dispatch => 
    bindActionCreators({ markAsDone, markAsPending, remove }, dispatch)
export default connect(mapStateToProps,mapDispatchToProps)(TodoList)