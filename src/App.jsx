import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Inicio from './pages/Inicio';
import Preguntas from './pages/Preguntas';
import Productos from './pages/Productos';
import Header from './componentes/Header';

function App() {

  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Inicio />} />
      <Route path='/preguntas' element={<Preguntas />} />
      <Route path='/productos' element={<Productos />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
