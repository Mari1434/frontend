import { Navigate, Outlet } from 'react-router';
import { useAuth } from '../contexts/AuthContext';

function Privado() {
    const {logado} = useAuth();

    return <>
        {logado ? (<Outlet />) : (<Navigate to="/login" />)}
    </>
}

export default Privado;