import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import Tabela from "../components/Tabela";

function Faltas(props) {
    const colunasFaltas = ["Disciplina", "Total de Faltas", "% de Presença"];

    const faltas2026_1 = [
        ["BI e Data Warehousing", 0, "100%"],
        ["Construção de Frontend", 0, "100%"],
        ["Manutenção de Software e Devops", 0, "100%"]
    ];

    const faltas2025_2 = [
        ["Construção de Backend", 27, "87.5%"],
        ["Estrutura de Dados", 9, "85%"],
        ["Gerenciamento de Projetos", 10.5, "82.5%"]
    ];

    return (
        <section className="flex min-h-screen w-full">
            <Sidebar navegaPara={props.navegaPara} />
            
            <Main titulo="Minhas Faltas" subtitulo="Histórico de Faltas por Semestre">
                
                <Tabela 
                    titulo="2026.1" 
                    colunas={colunasFaltas} 
                    dados={faltas2026_1} 
                />

                <Tabela 
                    titulo="2025.2" 
                    colunas={colunasFaltas} 
                    dados={faltas2025_2} 
                />

            </Main>
        </section>
    );
}

export default Faltas;