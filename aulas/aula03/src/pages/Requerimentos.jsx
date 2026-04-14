import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import Tabela from "../components/Tabela";

function Requerimentos(props) {
    return (
        <>
            <Sidebar navegaPara={props.navegaPara}/>
            <Main titulo="Meus Requerimentos" subtitulo="Faça solicitações online para a secretaria">
                <Tabela colunas={[]} dados={[]}/>
            </Main>
        </>
    );
}

export default Requerimentos;