
function Menu({ navegaPara }) {
    return (
        <nav className="mt-16">
            <ul className="list-disc pl-6 flex flex-col gap-6 text-[#303030] font-bold text-lg">
                <li><a href="#" onClick={(e) => { e.preventDefault(); navegaPara(1); }}>Dashboard</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); navegaPara(2); }}>Notas</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); navegaPara(3); }}>Faltas</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); navegaPara(4); }}>Boletos</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); navegaPara(5); }}>Requerimentos</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); navegaPara(0); }}>Sair</a></li>
            </ul>
        </nav>
    );
}

export default Menu;