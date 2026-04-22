import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import Tabela from "../components/Tabela";

function Notas(props) {

    const colunas = ["Disciplina", "A1", "A2", "A3", "Menção"];
    
    const notas = [
        [
            ["BI e Data Warehousing", "", "", "", "SR"],
            ["Construção de Frontend", "", "", "", "SR"],
            ["Manutenção de Software e Devops", "", "", "", "SR"]
        ],
    
        [
            ["Construção de Backend", "5.4", "6.2", "", "MM"],
            ["Estrutura de Dados", "6.3", "6.1", "", "MM"],
            ["Gerenciamento de Projetos", "7.4", "7.1", "", "MS"]
        ]
    ];

    return (
        <section className="flex min-h-screen w-full">
            <Sidebar navegaPara={props.navegaPara} />
            
            <Main titulo="Minhas Notas" subtitulo="Histórico de Notas por Semestre">
                
                <Tabela 
                    titulo="2026.1" 
                    colunas={colunas} 
                    dados={notas[0]} 
                />

                <Tabela 
                    titulo="2025.2" 
                    colunas={colunas} 
                    dados={notas[1]} 
                />

            </Main>
        </section>
    );
}

export default Notas;