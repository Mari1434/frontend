import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import Tabela from "../components/Tabela";

function Requerimentos() {
    return (
        <>
            <Sidebar />
            <Main titulo="Meus Requerimentos" subtitulo="Faça solicitações online para a secretaria">
                <Tabela />
            </Main>
        </>
    );
}

export default Requerimentos;