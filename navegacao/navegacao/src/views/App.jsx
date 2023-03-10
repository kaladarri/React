import React from "react";
import './App.css'
import Menu from "../components/layout/Menu";
import Content from "../components/layout/Content";
import { BrowserRouter } from 'react-router-dom';

const App = props => (
    <div className="App">
        <BrowserRouter>
            <Menu/>
            <Content/>
        </BrowserRouter>        
    </div>
)

export default App