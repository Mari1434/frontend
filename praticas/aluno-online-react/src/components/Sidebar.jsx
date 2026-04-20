import logo from '../assets/learn.svg';
import Menu from './Menu';

function Sidebar(props) {
    return (
        <aside className="hidden md:flex flex-col w-[280px] min-w-[280px] min-h-screen bg-[#e9e9e9] p-8">
            <header className='flex items-center gap-3'>
                <img src={logo} alt="imagem da logo" className="w-10 h-10"/>
                <h1 className="text-xl font-bold text-[#303030]">Aluno Online</h1>
            </header>
            <Menu navegaPara={props.navegaPara} />
        </aside>
    );
}

export default Sidebar;