function InputSenha({ senha, erro, mudaValor }) {
    return (
        <section className="flex flex-col w-full mb-2">
            <label htmlFor="senha" className="text-[#1a1a1a] mb-1">Senha</label>
            <input 
                className="border border-gray-200 rounded-md px-3 py-2 outline-none focus:border-gray-400 w-full" 
                value={senha} 
                onChange={mudaValor} 
                type="password" 
                id="senha" 
                name="senha" 
            />
            {erro && <p className="text-[#cc0000] text-base mt-2">{erro}</p>}
        </section>
    );
}

export default InputSenha;