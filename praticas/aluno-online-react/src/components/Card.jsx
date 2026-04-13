function Card(props) {
    return (
            <article className="mb-6 border border-[#e9e9e9] rounded-lg overflow-hidden bg-white">
                <h3 className="bg-[#e9e9e9] py-3 px-4 text-lg font-bold text-[#303030]">
                    {props.titulo}
                </h3>
                <ul className="p-4 flex flex-col gap-2">
                    {props.itens.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
                </ul>
            </article>
    );
}
export default Card;