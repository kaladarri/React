import React from 'react'
import ReactDom from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import Field from './field'
import fieldReducer from './fieldReducer'

const reducers = combineReducers({
    field: fieldReducer, 
    key2: () => ({ value :'teste3'})
})

ReactDom.render(
    <Provider store={createStore(reducers)}>
        <Field initialValue='teste'/>
    </Provider>
, document.getElementById('app'))