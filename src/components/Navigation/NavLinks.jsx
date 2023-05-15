import { NavLink } from 'react-router-dom';

import './NavLinks.css'


const NavLinks = (props) => {

    return <ul className='nav-links'>
        <li>
            <NavLink to="/" exact='true'>Inicio</NavLink>
        </li>
        <li>
            <NavLink to="/repos">Repositorios</NavLink>
        </li>
        <li>
            <NavLink to="/function">Función</NavLink>
        </li>
        <li>
            <NavLink to="/logic">Lógica</NavLink>
        </li>
        <li>
            <NavLink to="/database">Base de datos</NavLink>
        </li>
        <li>
            <NavLink to="/architecture">Arquitectura</NavLink>
        </li>
        <li>
            <NavLink to="/policy">Politicas</NavLink>
        </li>
    </ul>
};

export default NavLinks;