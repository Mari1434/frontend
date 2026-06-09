import { createContext, useContext, useState } from "react";
import { entrar } from "../services/authService";

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [usuario, setUsuario] = useState({});
    const [logado, setLogado] = useState(localStorage.getItem("app.token"));

    const login = async (dados) => {
        const {token, mensagem} = await entrar(dados);
        if (token) {
            setUsuario({email: dados.email, token});
        localStorage.setItem("app.token", token);
        setLogado(true);
        return;
        }
        throw new Error(mensagem);
    };

    const logout = () => {
        setUsuario({});
        localStorage.removeItem("app.token");
        setLogado(false);
    };

    return (
        <AuthContext.Provider value={{ logado, usuario, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    return useContext(AuthContext);
}

export { AuthProvider, useAuth };