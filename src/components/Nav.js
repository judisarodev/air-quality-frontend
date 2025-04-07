import React from "react";
import './../styles/nav.css';
import { useNavigate } from "react-router-dom";

const Nav = () => {

    const items = [{
        name: 'Inicio',
        link: '/'
    }, {
        name: 'Mapa',
        link: '/mapa'
    }, {
        name: 'Calculadora',
        link: '/calculadora'
    }, {
        name: 'Nosotros',
        link: '/nosotros'
    },]

    const navigate = useNavigate();

    return (<>
        <div className="nav-container">
            <nav className="nav-components">
                {items.map(i => {
                    return <p onClick={() => navigate(i.link)} className="nav-components__item">{i.name}</p>
                })}
            </nav>
        </div>
    </>)
}

export { Nav }