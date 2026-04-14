import { useState } from 'react';
import Boletos from './pages/Boletos';
import Dashboard from './pages/Dashboard';
import Faltas from './pages/Faltas';
import Login from './pages/Login';
import Notas from './pages/Notas';
import Requerimentos from './pages/Requerimentos';

function App() {
  const [pagina, setPagina] = useState(0);

  switch(pagina) {
    case 1: return <Dashboard navegaPara={setPagina}/>
    case 2: return <Notas navegaPara={setPagina}/>
    case 3: return <Faltas navegaPara={setPagina}/>
    case 4: return <Boletos navegaPara={setPagina}/>
    case 5: return <Requerimentos navegaPara={setPagina}/>
    default: return <Login navegaPara={setPagina}/>
  }
}

export default App;