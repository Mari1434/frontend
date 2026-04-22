function InputMatricula({ matricula, erro, mudaValor }) {
    return (
        <section className="flex flex-col w-full">
            <label htmlFor="email" className="text-[#1a1a1a] mb-1">E-mail</label>
            <input 
                className="border border-gray-200 rounded-md px-3 py-2 outline-none focus:border-gray-400 w-full" 
                value={matricula} 
                onChange={mudaValor} 
                type="email" 
                id="email" 
                name="email" 
            />
            {erro && <p className="text-[#cc0000] text-base mt-2">{erro}</p>}
        </section>
    );
}

export default InputMatricula;