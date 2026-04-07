import avatar from '../assets/avatar.svg';
import Sidebar from "../components/Sidebar";

function Boletos() {
    const boletos = [
        { vencimento: "19/01/2026", valor: "500,00", situacao: "Pago" },
        { vencimento: "19/02/2026", valor: "500,00", situacao: "Em atraso" },
        { vencimento: "19/03/2026", valor: "500,00", situacao: "A Pagar" },
        { vencimento: "19/04/2026", valor: "500,00", situacao: "A Pagar" },
        { vencimento: "19/05/2026", valor: "500,00", situacao: "A Pagar" },
        { vencimento: "19/06/2026", valor: "500,00", situacao: "A Pagar" },
        { vencimento: "19/07/2026", valor: "500,00", situacao: "A Pagar" },
        { vencimento: "19/08/2026", valor: "500,00", situacao: "A Pagar" },
        { vencimento: "19/09/2026", valor: "500,00", situacao: "A Pagar" },
        { vencimento: "19/10/2026", valor: "500,00", situacao: "A Pagar" },
        { vencimento: "19/11/2026", valor: "500,00", situacao: "A Pagar" },
        { vencimento: "19/12/2026", valor: "500,00", situacao: "A Pagar" },
        { vencimento: "19/01/2027", valor: "500,00", situacao: "A Pagar" }
    ];

    return (
        <section className="flex min-h-screen w-full">
            <Sidebar />

            <main className='flex-1 flex flex-col p-8 w-full max-w-[900px] font-sans text-[#303030]'>
                
                <header className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-[#202020]">Meus Boletos</h1>
                    <img src={avatar} alt="imagem do avatar" className="w-12 h-12" />
                </header>
                
                <h2 className="text-2xl font-bold text-[#303030] mb-6 leading-tight">
                    Histórico de Pagamentos
                </h2>

                <article className="border border-[#e9e9e9] rounded-lg overflow-hidden mb-8 bg-white">
                    <table className="w-full border-collapse text-[#303030]">
                        <thead className="bg-[#e9e9e9]">
                            <tr>
                                <th className="p-3 text-center font-bold border border-[#e9e9e9] w-[33%]">Vencimento</th>
                                <th className="p-3 text-center font-bold border border-[#e9e9e9] w-[33%]">Valor R$</th>
                                <th className="p-3 text-center font-bold border border-[#e9e9e9] w-[33%]">Situação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {boletos.map((item, index) => (
                                <tr key={index}>
                                    <td className="p-3 border border-[#e9e9e9] text-left">{item.vencimento}</td>
                                    <td className="p-3 border border-[#e9e9e9] text-left">{item.valor}</td>
                                    <td className="p-3 border border-[#e9e9e9] text-left">{item.situacao}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </article>

            </main>
        </section>
    );
}

export default Boletos;