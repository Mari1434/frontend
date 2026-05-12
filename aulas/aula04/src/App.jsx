import { Routes, Route } from 'react-router';
import Settings from './pages/Settings';
import Home from './pages/Home';
import About from './pages/About';
import Perfil from './pages/Perfil';
import Erro404 from './pages/Erro404';
import Layout from './layouts/Layout';
import Login from './pages/Login';
import { useAuth } from './contexts/AuthContext';

function App() {
  const { logado } = useAuth();

  return (
  <Routes>
    { logado ? (
    <Route path="/" element={<Layout />}> {/* template */}
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="perfil/:id" element={<Perfil />} />
      <Route path="settings" element={<Settings />} />
    </Route>
    ) : (
    <Route path="/login" element={<Login/>} />
    )};
    <Route path="*" element={<Erro404 />} />
  </Routes>
  );
}

export default App;