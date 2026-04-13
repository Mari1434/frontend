import avatar from '../assets/avatar.svg';

function Topbar(props) {
    return (
        <header className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-[#202020]">{props.titulo}</h1>
            <img src={avatar} alt="imagem do avatar" className="w-12 h-12" />
        </header>
    );
}

export default Topbar;