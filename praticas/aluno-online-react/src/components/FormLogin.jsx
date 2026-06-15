import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../hooks/UseAuth";
import InputMatricula from "./InputMatricula";
import InputSenha from "./InputSenha";
import InputSubmit from "./InputSubmit";

function FormLogin() {
    const navigate = useNavigate();
    const { login } = useAuth();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [emailErro, setEmailErro] = useState("");
    const [senhaErro, setSenhaErro] = useState("");
    
    const [erroGeral, setErroGeral] = useState(""); 

    const trataSubmit = async (e) => {
        e.preventDefault();
        let temErro = false;
        
        setErroGeral("");

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
            try {
                await login(email, senha);
                navigate("/");
            } catch {
                setErroGeral("E-mail ou senha incorretos. Tente novamente.");
            }
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
            
            {erroGeral && (
                <div className="text-red-600 text-sm text-center font-semibold">
                    {erroGeral}
                </div>
            )}

            <InputSubmit texto="Entrar" />
        </form>
    );
}

export default FormLogin;