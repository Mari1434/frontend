import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
    const [usuario, setUsuario] = useState({});
    const [logado, setLogado] = useState(false);

    const login = () => {
        setUsuario({nome: "Mariana"});
        setLogado(true);
    }

    const logout = () => {
        setUsuario({});
        setLogado(false);
    }

    return (
        <AuthContext.Provider value={{ logado, usuario, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    return useContext(AuthContext);
}

// eslint-disable-next-line react-refresh/only-export-components
export { AuthProvider, useAuth };