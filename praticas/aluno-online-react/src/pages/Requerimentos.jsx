import avatar from '../assets/avatar.svg';
import Sidebar from "../components/Sidebar";

function Requerimentos() {
    const requerimentos = [
        { tipo: "Revisão de Menção", data: "15/12/2025", situacao: "Indeferido" },
        { tipo: "Dispensa de Disciplina", data: "12/06/2025", situacao: "Indeferido" },
        { tipo: "Trancamento de Matrícula", data: "05/01/2024", situacao: "Deferido" },
        { tipo: "Mudança de Turno", data: "10/10/2023", situacao: "Deferido" },
        { tipo: "Renovação de Matrícula", data: "20/02/2023", situacao: "Deferido" }
    ];

    return (
        <section className="flex min-h-screen w-full">
            <Sidebar />

            <main className='flex-1 flex flex-col p-8 w-full max-w-[900px] font-sans text-[#303030]'>
                
                <header className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-[#202020]">Meus Requerimentos</h1>
                    <img src={avatar} alt="imagem do avatar" className="w-12 h-12" />
                </header>
                
                <h2 className="text-2xl font-bold text-[#303030] mb-6 leading-tight">
                    Faça solicitações online para a secretaria
                </h2>

                <article className="border border-[#e9e9e9] rounded-lg overflow-hidden mb-8 bg-white">
                    <table className="w-full border-collapse text-[#303030]">
                        <thead className="bg-[#e9e9e9]">
                            <tr>
                                <th className="p-3 text-center font-bold border border-[#e9e9e9] w-[40%]">Tipo de Requerimento</th>
                                <th className="p-3 text-center font-bold border border-[#e9e9e9] w-[30%]">Data de Solicitação</th>
                                <th className="p-3 text-center font-bold border border-[#e9e9e9] w-[30%]">Situação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {requerimentos.map((item, index) => (
                                <tr key={index}>
                                    <td className="p-3 border border-[#e9e9e9] text-left">{item.tipo}</td>
                                    <td className="p-3 border border-[#e9e9e9] text-left">{item.data}</td>
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

export default Requerimentos;