import './Menu.css';
import { Link, NavLink } from 'react-router';

function Menu() {
    return (
        <nav className="mt-16">
            <ul className="list-disc pl-6 flex flex-col gap-6 text-[#303030] font-bold text-lg">
                <li><NavLink to="/">Dashboard</NavLink></li>
                <li><NavLink to="/notas">Notas</NavLink></li>
                <li><NavLink to="/faltas">Faltas</NavLink></li>
                <li><NavLink to="/boletos">Boletos</NavLink></li>
                <li><NavLink to="/requerimentos">Requerimentos</NavLink></li>
                <li><Link to="/login">Sair</Link></li>
            </ul>
        </nav>
    );
}

export default Menu;