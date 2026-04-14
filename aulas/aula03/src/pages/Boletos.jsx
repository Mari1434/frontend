import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import Tabela from "../components/Tabela";

function Boletos(props) {
    return (
        <>
            <Sidebar navegaPara={props.navegaPara}/>
            <Main titulo="Meus Boletos" subtitulo="Histórico de Pagamentos">
                <Tabela colunas={[]} dados={[]}/>
            </Main>
        </>
    );
}

export default Boletos;