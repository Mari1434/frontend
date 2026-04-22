import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import Tabela from "../components/Tabela";

function Requerimentos(props) {
    const colunasRequerimentos = ["Tipo de Requerimento", "Data de Solicitação", "Situação"];

    const dadosRequerimentos = [
        ["Revisão de Menção", "15/12/2025", "Indeferido"],
        ["Dispensa de Disciplina", "12/06/2025", "Indeferido"],
        ["Trancamento de Matrícula", "05/01/2024", "Deferido"],
        ["Mudança de Turno", "10/10/2023", "Deferido"],
        ["Renovação de Matrícula", "20/02/2023", "Deferido"]
    ];

    return (
        <section className="flex min-h-screen w-full">
            <Sidebar navegaPara={props.navegaPara} />
            
            <Main titulo="Meus Requerimentos" subtitulo="Faça solicitações online para a secretaria">
                
                <Tabela 
                    colunas={colunasRequerimentos} 
                    dados={dadosRequerimentos} 
                />

            </Main>
        </section>
    );
}

export default Requerimentos;