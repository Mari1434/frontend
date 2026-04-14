function InputSenha({senha, erro, mudaValor}) {
    return(
    <>
        <label htmlFor="senha">Senha</label>
        <input className="border rounded-lg" value={senha} onChange={mudaValor} type="password" id="senha" name="senha" />
        <p>{erro}</p>
    </>)
}

export default InputSenha;