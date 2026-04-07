import avatar from '../assets/avatar.svg';
import Sidebar from "../components/Sidebar";

function Faltas() {
    const faltas2026_1 = [
        { disciplina: "BI e Data Warehousing", faltas: 0, presenca: "100%" },
        { disciplina: "Construção de Frontend", faltas: 0, presenca: "100%" },
        { disciplina: "Manutenção de Software e Devops", faltas: 0, presenca: "100%" }
    ];

    const faltas2025_2 = [
        { disciplina: "Construção de Backend", faltas: 27, presenca: "87.5%" },
        { disciplina: "Estrutura de Dados", faltas: 9, presenca: "85%" },
        { disciplina: "Gerenciamento de Projetos", faltas: 10.5, presenca: "82.5%" }
    ];

    return (
        <section className="flex min-h-screen w-full">
            <Sidebar />

            <main className='flex-1 flex flex-col p-8 w-full max-w-[900px] font-sans text-[#303030]'>
                
                <header className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-[#202020]">Minhas Faltas</h1>
                    <img src={avatar} alt="imagem do avatar" className="w-12 h-12" />
                </header>
                
                <h2 className="text-2xl font-bold text-[#303030] mb-6 leading-tight">
                    Histórico de Faltas por Semestre
                </h2>

                <article className="border border-[#e9e9e9] rounded-lg overflow-hidden mb-8 bg-white">
                    <div className="bg-[#e9e9e9] pt-4 px-4 pb-2 text-xl font-bold text-[#303030]">
                        2026.1
                    </div>
                    <table className="w-full border-collapse text-[#303030]">
                        <thead className="bg-[#e9e9e9]">
                            <tr>
                                <th className="p-3 text-left font-bold border border-[#e9e9e9]">Disciplina</th>
                                <th className="p-3 text-center font-bold border border-[#e9e9e9] w-[20%]">Total de Faltas</th>
                                <th className="p-3 text-center font-bold border border-[#e9e9e9] w-[20%]">% de Presença</th>
                            </tr>
                        </thead>
                        <tbody>
                            {faltas2026_1.map((item, index) => (
                                <tr key={index}>
                                    <td className="p-3 border border-[#e9e9e9]">{item.disciplina}</td>
                                    <td className="p-3 border border-[#e9e9e9] text-center">{item.faltas}</td>
                                    <td className="p-3 border border-[#e9e9e9] text-center">{item.presenca}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </article>

                <article className="border border-[#e9e9e9] rounded-lg overflow-hidden mb-8 bg-white">
                    <div className="bg-[#e9e9e9] pt-4 px-4 pb-2 text-xl font-bold text-[#303030]">
                        2025.2
                    </div>
                    <table className="w-full border-collapse text-[#303030]">
                        <thead className="bg-[#e9e9e9]">
                            <tr>
                                <th className="p-3 text-left font-bold border border-[#e9e9e9]">Disciplina</th>
                                <th className="p-3 text-center font-bold border border-[#e9e9e9] w-[20%]">Total de Faltas</th>
                                <th className="p-3 text-center font-bold border border-[#e9e9e9] w-[20%]">% de Presença</th>
                            </tr>
                        </thead>
                        <tbody>
                            {faltas2025_2.map((item, index) => (
                                <tr key={index}>
                                    <td className="p-3 border border-[#e9e9e9]">{item.disciplina}</td>
                                    <td className="p-3 border border-[#e9e9e9] text-center">{item.faltas}</td>
                                    <td className="p-3 border border-[#e9e9e9] text-center">{item.presenca}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </article>

            </main>
        </section>
    );
}

export default Faltas;