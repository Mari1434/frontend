function Tabela(props) {
    return (
        <article className="border border-[#e9e9e9] rounded-lg overflow-hidden mb-8 bg-white">
            
            {props.titulo && (
                <div className="bg-[#e9e9e9] pt-4 px-4 pb-2 text-xl font-bold text-[#303030]">
                    {props.titulo}
                </div>
            )}

            <table className="w-full border-collapse text-[#303030]">
                <thead className="bg-[#e9e9e9]">
                    <tr>
                        {props.colunas.map((item, index) => (
                            <th 
                                key={index} 
                                className={`p-3 font-bold border border-[#e9e9e9] ${index === 0 ? 'text-left' : 'text-center w-[20%]'}`}
                            >
                                {item}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {props.dados.map((linha, i) => (
                        <tr key={i}>
                            {linha.map((coluna, j) => (
                                <td 
                                    key={j} 
                                    className={`p-3 border border-[#e9e9e9] ${j === 0 ? 'text-left' : 'text-center'}`}
                                >
                                    {coluna}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </article>
    );
}

export default Tabela;