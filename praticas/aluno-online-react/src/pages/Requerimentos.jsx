import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Main from "../components/Main";
import Tabela from "../components/Tabela";
import { getRequerimentos } from "../services/requerimentoService";

function Requerimentos() {
    const navigate = useNavigate();
    
    const [dadosRequerimentos, setDadosRequerimentos] = useState([]);

    const colunasRequerimentos = ["Tipo de Requerimento", "Data de Solicitação", "Situação"];

    useEffect(() => {
        const carregarDados = async () => {
            try {
                const dados = await getRequerimentos();
                
                const dadosFormatados = dados.map(req => [
                    req.tipoRequerimento,
                    req.dataRequerimento,
                    req.situacao
                ]);
                
                setDadosRequerimentos(dadosFormatados.reverse());
            } catch (error) {
                console.error("Não foi possível carregar os requerimentos.", error);
            }
        };

        carregarDados();
    }, []);

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