import { useEffect, useState } from "react";

function Home() {
    const [ carregando, setCarregando ] = useState(true);
    const [tarefas, setTarefas] = useState([]);

    useEffect(
        () => {
            const timeout = setTimeout(() => {
                setTarefas([
                    { id: 1, nome: "Implementar Trabalho", situacao: "aberta" },
                    { id: 2, nome: "Entregar Práticas", situacao: "pendente" },
                    { id: 3, nome: "Revisar Conteúdo", situacao: "aberta" },
                    { id: 4, nome: "Assistir Vídeo-Aulas", situacao: "concluída" }
                ]);
                setCarregando(false);
            }, 3000);
            return () => clearTimeout(timeout);
        }, []);

    return (
        <>
            <h1>Página Principal</h1>
            {carregando ? (
                <table className="border rounded border-gray-300 animate-pulse">
                <thead className="bg-gray-300">
                    <tr>
                        <th><div className="p-1 h-4"></div></th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><div className="p-1 m-2 h-2 rounded-full bg-gray-300 w-3"></div></td>
                        <td><div className="p-1 m-2 h-2 rounded-full bg-gray-300 w-32"></div></td>
                        <td><div className="p-1 m-2 h-2 rounded-full bg-gray-300 w-16"></div></td>
                    </tr>
                    <tr>
                        <td><div className="p-1 m-2 h-2 rounded-full bg-gray-300 w-3"></div></td>
                        <td><div className="p-1 m-2 h-2 rounded-full bg-gray-300 w-32"></div></td>
                        <td><div className="p-1 m-2 h-2 rounded-full bg-gray-300 w-16"></div></td>
                    </tr>
                    <tr>
                        <td><div className="p-1 m-2 h-2 rounded-full bg-gray-300 w-3"></div></td>
                        <td><div className="p-1 m-2 h-2 rounded-full bg-gray-300 w-32"></div></td>
                        <td><div className="p-1 m-2 h-2 rounded-full bg-gray-300 w-16"></div></td>
                    </tr>
                </tbody>
            </table>
            ) : (
            <table className="border rounded border-gray-300">
                <thead className="bg-gray-300">
                    <tr>
                        <th className="p-1">ID</th>
                        <th>Tarefa</th>
                        <th>Situação</th>
                    </tr>
                </thead>
                <tbody>{tarefas.map((item) => (
                    <tr key={item.id}>
                        <td className="p-1 m-1">{item.id}</td>
                        <td className="p-1 m-1">{item.nome}</td>
                        <td className="p-1 m-1">{item.situacao}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            )}
        </>
    );
}

export default Home;