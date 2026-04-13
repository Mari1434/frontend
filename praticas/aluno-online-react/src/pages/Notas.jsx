import avatar from '../assets/avatar.svg';
import Sidebar from "../components/Sidebar";

function Notas() {
    const notas2026_1 = [
        { disciplina: "BI e Data Warehousing", a1: "", a2: "", a3: "", mencao: "SR" },
        { disciplina: "Construção de Frontend", a1: "", a2: "", a3: "", mencao: "SR" },
        { disciplina: "Manutenção de Software e Devops", a1: "", a2: "", a3: "", mencao: "SR" }
    ];

    const notas2025_2 = [
        { disciplina: "Construção de Backend", a1: "5.4", a2: "6.2", a3: "", mencao: "MM" },
        { disciplina: "Estrutura de Dados", a1: "6.3", a2: "6.1", a3: "", mencao: "MM" },
        { disciplina: "Gerenciamento de Projetos", a1: "7.4", a2: "7.1", a3: "", mencao: "MS" }
    ];

    return (
        <section className="flex min-h-screen w-full">
            <Sidebar />

            <main className='flex-1 flex flex-col p-8 w-full max-w-[900px] font-sans text-[#303030]'>
                
                <header className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-[#202020]">Minhas Notas</h1>
                    <img src={avatar} alt="imagem do avatar" className="w-12 h-12" />
                </header>
                
                <h2 className="text-2xl font-bold text-[#303030] mb-6 leading-tight">
                    Histórico de Notas por Semestre
                </h2>

                <article className="border border-[#e9e9e9] rounded-lg overflow-hidden mb-8 bg-white">
                    <div className="bg-[#e9e9e9] pt-4 px-4 pb-2 text-xl font-bold text-[#303030]">
                        2026.1
                    </div>
                    <table className="w-full border-collapse text-[#303030]">
                        <thead className="bg-[#e9e9e9]">
                            <tr>
                                <th className="p-3 text-left font-bold border border-[#e9e9e9]">Disciplina</th>
                                <th className="p-3 text-center font-bold border border-[#e9e9e9] w-[10%]">A1</th>
                                <th className="p-3 text-center font-bold border border-[#e9e9e9] w-[10%]">A2</th>
                                <th className="p-3 text-center font-bold border border-[#e9e9e9] w-[10%]">A3</th>
                                <th className="p-3 text-center font-bold border border-[#e9e9e9] w-[15%]">Menção</th>
                            </tr>
                        </thead>
                        <tbody>
                            {notas2026_1.map((item, index) => (
                                <tr key={index}>
                                    <td className="p-3 border border-[#e9e9e9]">{item.disciplina}</td>
                                    <td className="p-3 border border-[#e9e9e9] text-center">{item.a1}</td>
                                    <td className="p-3 border border-[#e9e9e9] text-center">{item.a2}</td>
                                    <td className="p-3 border border-[#e9e9e9] text-center">{item.a3}</td>
                                    <td className="p-3 border border-[#e9e9e9] text-center">{item.mencao}</td>
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
                                <th className="p-3 text-center font-bold border border-[#e9e9e9] w-[10%]">A1</th>
                                <th className="p-3 text-center font-bold border border-[#e9e9e9] w-[10%]">A2</th>
                                <th className="p-3 text-center font-bold border border-[#e9e9e9] w-[10%]">A3</th>
                                <th className="p-3 text-center font-bold border border-[#e9e9e9] w-[15%]">Menção</th>
                            </tr>
                        </thead>
                        <tbody>
                            {notas2025_2.map((item, index) => (
                                <tr key={index}>
                                    <td className="p-3 border border-[#e9e9e9]">{item.disciplina}</td>
                                    <td className="p-3 border border-[#e9e9e9] text-center">{item.a1}</td>
                                    <td className="p-3 border border-[#e9e9e9] text-center">{item.a2}</td>
                                    <td className="p-3 border border-[#e9e9e9] text-center">{item.a3}</td>
                                    <td className="p-3 border border-[#e9e9e9] text-center">{item.mencao}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </article>

            </main>
        </section>
    );
}

export default Notas;