import React from "react";
import './Menu.css'
import { Link } from "react-router-dom";

const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/param/1">Param #1</Link>
                </li>
                <li>
                    <Link to="/param/2">Param #2</Link>
                </li>
                <li>
                    <Link to="/404">Não existe</Link>
                </li>
            </ul>
        </nav>
    </aside>
)

export default Menu