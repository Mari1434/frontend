import Main from "../components/Main";
import Sidebar from "../components/Sidebar";
import Tabela from "../components/Tabela";

function Boletos(props) {
    const colunasBoletos = ["Vencimento", "Valor R$", "Situação"];

    const dadosBoletos = [
        ["19/01/2026", "500,00", "Pago"],
        ["19/02/2026", "500,00", "Em atraso"],
        ["19/03/2026", "500,00", "A Pagar"],
        ["19/04/2026", "500,00", "A Pagar"],
        ["19/05/2026", "500,00", "A Pagar"],
        ["19/06/2026", "500,00", "A Pagar"],
        ["19/07/2026", "500,00", "A Pagar"],
        ["19/08/2026", "500,00", "A Pagar"],
        ["19/09/2026", "500,00", "A Pagar"],
        ["19/10/2026", "500,00", "A Pagar"],
        ["19/11/2026", "500,00", "A Pagar"],
        ["19/12/2026", "500,00", "A Pagar"],
        ["19/01/2027", "500,00", "A Pagar"]
    ];

    return (
        <section className="flex min-h-screen w-full">
            <Sidebar navegaPara={props.navegaPara}/>
            
            <Main titulo="Meus Boletos" subtitulo="Histórico de Pagamentos">
                
                <Tabela 
                    colunas={colunasBoletos} 
                    dados={dadosBoletos} 
                />

            </Main>
        </section>
    );
}

export default Boletos;