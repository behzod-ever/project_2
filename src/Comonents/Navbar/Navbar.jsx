import React from 'react'
import { NavLink } from "react-router-dom"
import "./navbar.css"

function Navbar() {
    return (
        <nav>
            <div className="navigate">
                <NavLink className="image"><img src="" alt="Logo" /></NavLink>
                <NavLink>Главная</NavLink>
                <NavLink>Про гида</NavLink>
                <NavLink>Программа тура</NavLink>
                <NavLink>Стоимость</NavLink>
                <NavLink>Блог</NavLink>
                <NavLink>Контакты</NavLink>
                <button>Консультация</button>
            </div>
        </nav>
    )
}

export default Navbar
