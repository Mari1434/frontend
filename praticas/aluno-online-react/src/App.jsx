import { Routes, Route, Navigate } from 'react-router';
import Layout from "./layouts/Layout";
import Boletos from "./pages/Boletos";
import Dashboard from "./pages/Dashboard";
import Faltas from "./pages/Faltas";
import Login from "./pages/Login";
import Notas from "./pages/Notas";
import Requerimentos from "./pages/Requerimentos";
import RequerimentoForm from "./forms/RequerimentoForm";
import { useAuth } from './hooks/UseAuth';

function App() {
  const { logado } = useAuth();

  return (
    <Routes>
      { logado ? (
      <Route path="/" element={<Layout />}>
      <Route index element={<Dashboard />} />
      <Route path="notas" element={<Notas />} />
      <Route path="faltas" element={<Faltas />} />
      <Route path="boletos" element={<Boletos />} />
      <Route path="requerimentos">
        <Route index element={<Requerimentos />} />
        <Route path="novo" element={<RequerimentoForm />} />
      </Route>
      </Route>
      ) : (
      <>
      <Route path="/login" element={<Login/>} />
      <Route path="*" element={<Navigate to="/login" replace />} />
      </>
      )}
    </Routes>

  );
}

export default App;
