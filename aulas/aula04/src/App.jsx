import { Routes, Route } from 'react-router';
import Settings from './pages/Settings';
import Home from './pages/Home';
import About from './pages/About';
import Perfil from './pages/Perfil';
import Erro404 from './pages/Erro404';
import Layout from './layouts/Layout';

function App() {
  return (
  <Routes>
    <Route element={<Layout />}> {/* template */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="*" element={<Erro404 />} />
    </Route>
  </Routes>
  );
}

export default App;