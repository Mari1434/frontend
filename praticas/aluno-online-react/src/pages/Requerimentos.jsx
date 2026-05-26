import { useNavigate } from "react-router-dom";
import Main from "../components/Main";
import Tabela from "../components/Tabela";

function Requerimentos() {
    const navigate = useNavigate();

    const colunasRequerimentos = ["Tipo de Requerimento", "Data de Solicitação", "Situação"];

    const dadosRequerimentos = [
        ["Revisão de Menção", "15/12/2025", "Indeferido"],
        ["Dispensa de Disciplina", "12/06/2025", "Indeferido"],
        ["Trancamento de Matrícula", "05/01/2024", "Deferido"],
        ["Mudança de Turno", "10/10/2023", "Deferido"],
        ["Renovação de Matrícula", "20/02/2023", "Deferido"]
    ];

    return (
        <section>
            
            <Main titulo="Meus Requerimentos" subtitulo="Faça solicitações online para a secretaria">

                <div className="flex justify-center mb-6">
                    <button 
                        onClick={() => navigate('/requerimentos/novo')}
                        className="bg-gray-200 text-black font-bold py-2 px-6 cursor-pointer hover:bg-gray-300 active:bg-gray-400 transition-colors"
                    >
                        ➕ Novo Requerimento
                    </button>
                </div>
                
                <Tabela 
                    colunas={colunasRequerimentos} 
                    dados={dadosRequerimentos} 
                />

            </Main>
        </section>
    );
}

export default Requerimentos;