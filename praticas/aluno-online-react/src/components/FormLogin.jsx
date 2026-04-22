import { useState } from "react";
import InputMatricula from "./InputMatricula";
import InputSenha from "./InputSenha";
import InputSubmit from "./InputSubmit";

function FormLogin({ navegaPara }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [emailErro, setEmailErro] = useState("");
    const [senhaErro, setSenhaErro] = useState("");

    const trataSubmit = (e) => {
        e.preventDefault();
        let temErro = false;

        if (!email) {
            setEmailErro("O campo de e-mail é obrigatório.");
            temErro = true;
        } else if (!email.includes("@") || !email.includes(".")) {
            setEmailErro("Digite um formato de e-mail válido.");
            temErro = true;
        } else {
            setEmailErro("");
        }

        if (!senha) {
            setSenhaErro("O campo de senha é obrigatório.");
            temErro = true;
        } else if (senha.length < 6) {
            setSenhaErro("A senha deve ter no mínimo 6 caracteres.");
            temErro = true;
        } else {
            setSenhaErro("");
        }

        if (!temErro) {
            navegaPara(1);
        }
    }

    return (
        <form onSubmit={trataSubmit} className="flex flex-col gap-4 w-full">
            <InputMatricula 
                matricula={email} 
                erro={emailErro} 
                mudaValor={(e) => setEmail(e.target.value)} 
            />
            <InputSenha 
                senha={senha} 
                erro={senhaErro} 
                mudaValor={(e) => setSenha(e.target.value)} 
            />
            <InputSubmit texto="Entrar" />
        </form>
    );
}

export default FormLogin;