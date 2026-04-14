import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import Tabela from "../components/Tabela";

function Faltas(props) {
    return (
        <>
            <Sidebar navegaPara={props.navegaPara}/>
            <Main titulo="Minhas Faltas" subtitulo="Histórico de Faltas por Semestre">
                <Tabela titulo="2026.1" colunas={[]} dados={[]} />
                <Tabela titulo="2025.2" colunas={[]} dados={[]} />
                <Tabela titulo="2025.1" colunas={[]} dados={[]} />
            </Main>
        </>
    );
}

export default Faltas;