function InputMatricula({matricula, erro, mudaValor}) {
    return (<>
        <label htmlFor="matricula">Matrícula</label>
        <input className="border rounded-lg" value={matricula} onChange={mudaValor} type="number" id="matricula" name="matricula" />
        <p>{erro}</p>
    </>)
}

export default InputMatricula;