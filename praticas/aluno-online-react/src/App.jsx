import { Routes, Route } from 'react-router';
import Layout from "./layouts/Layout";
import Boletos from "./pages/Boletos";
import Dashboard from "./pages/Dashboard";
import Faltas from "./pages/Faltas";
import Login from "./pages/Login";
import Notas from "./pages/Notas";
import Requerimentos from "./pages/Requerimentos";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
      <Route path="/" element={<Dashboard />} />
      <Route path="/notas" element={<Notas />} />
      <Route path="/faltas" element={<Faltas />} />
      <Route path="/boletos" element={<Boletos />} />
      <Route path="/requerimentos" element={<Requerimentos />} />
      </Route>
      <Route path="/login" element={<Login/>} />
    </Routes>

  );
}

export default App;
