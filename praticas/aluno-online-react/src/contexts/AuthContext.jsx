import { createContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [usuario, setUsuario] = useState(null); 
    const [logado, setLogado] = useState(false);

    const login = (dados) => {
        setUsuario({ email: dados.username });
        setLogado(true);
    }

    const logout = () => {
        setUsuario(null);
        setLogado(false);
    }

    return (
        <AuthContext.Provider value={{ logado, usuario, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthProvider, AuthContext };