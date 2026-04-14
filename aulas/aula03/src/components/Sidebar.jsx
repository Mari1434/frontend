import logo from '../assets/learn.svg';
import Menu from './Menu';

function Sidebar(props) {
    return (
        <aside className="hidden md:block bg-gray-300">
            <header className='flex flex-row'>
                <img src={logo} alt="imagem da logo" />
                <h1>Aluno Online</h1>
            </header>
            <Menu navegaPara={props.navegaPara}/>
        </aside>
    );
}

export default Sidebar;