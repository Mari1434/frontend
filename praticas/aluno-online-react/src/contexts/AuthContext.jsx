import { createContext, useState } from "react";
import { loginService } from "../services/authService";

const AuthContext = createContext();

function AuthProvider({ children }) {
    
    const [usuario, setUsuario] = useState(() => {
        const userSalvo = localStorage.getItem('user');
        return userSalvo ? JSON.parse(userSalvo) : null;
    });

    const [logado, setLogado] = useState(() => {
        const tokenSalvo = localStorage.getItem('token');
        return !!tokenSalvo; 
    });

    const login = async (email, senha) => {
        const dados = await loginService(email, senha);
        
        localStorage.setItem('token', dados.token);
        localStorage.setItem('user', JSON.stringify(dados.usuario));
        
        setUsuario(dados.usuario);
        setLogado(true);
    };

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        
        setUsuario(null);
        setLogado(false);
    };

    return (
        <AuthContext.Provider value={{ logado, usuario, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthProvider, AuthContext };