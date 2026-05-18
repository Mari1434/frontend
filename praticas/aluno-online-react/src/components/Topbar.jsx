import avatar from '../assets/avatar.svg';
import { useAuth } from '../contexts/AuthContext';

function Topbar(props) {
    const { user } = useAuth();

    return (
        <header className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-[#202020]">{props.titulo}</h1>
            <div className="flex items-center gap-4">
                {user && (
                    <span className="text-sm font-medium text-[#202020]">
                        {user.username}
                    </span>
                )}
            <img src={avatar} alt="imagem do avatar" className="w-12 h-12" />
            </div>
        </header>
    );
}

export default Topbar;