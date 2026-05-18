import './Menu.css';
import { useNavigate, NavLink } from 'react-router';
import { useAuth } from '../hooks/UseAuth';

function Menu() {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleSair = (e) => {
        e.preventDefault();
        logout();
        navigate('/login');
    };

    return (
        <nav className="mt-16">
            <ul className="list-disc pl-6 flex flex-col gap-6 text-[#303030] font-bold text-lg">
                <li><NavLink to="/">Dashboard</NavLink></li>
                <li><NavLink to="/notas">Notas</NavLink></li>
                <li><NavLink to="/faltas">Faltas</NavLink></li>
                <li><NavLink to="/boletos">Boletos</NavLink></li>
                <li><NavLink to="/requerimentos">Requerimentos</NavLink></li>
                <li><a href="#" onClick={handleSair}>Sair</a></li>
            </ul>
        </nav>
    );
}

export default Menu;