import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import Tabela from "../components/Tabela";

function Notas(props) {
    const colunas = ["Disciplinas", "A1", "A2", "A3", "Menção"];
    const notas = [
        [["BI e Data WareHousing", "", "", "", "SR"],
        ["Construçaõ de FrontEnd", "", "", "", "SR"],
        ["Devops", "", "", "", "SR"]
    ],
    [["Estrutura de Dados", "5.5", "5.5", "", "MM"],
        ["Construçaõ de BackEnd", "0.0", "6.0", "4.0", "MM"],
        ["Gerenciamento de Projetos", "8.0", "9.0", "", "MS"]
    ],
    [["Engenharia de Software", "5.5", "5.5", "", "MM"],
        ["Dispositivos Móveis", "0.0", "6.0", "4.0", "MM"],
        ["Estatística", "8.0", "9.0", "", "MS"]
    ],
    ];

    return (
        <>
            <Sidebar navegaPara={props.navegaPara}/>
            <Main titulo="Minhas Notas" subtitulo="Histórico de Notas por Semestre">
                <Tabela titulo="2026.1" colunas={colunas} dados={notas[0]} />
                <Tabela titulo="2025.2" colunas={colunas} dados={notas[1]}/>
                <Tabela titulo="2025.1" colunas={colunas} dados={notas[2]}/>
            </Main>
        </>
    );
}

export default Notas;