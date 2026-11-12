import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Inicio from './pages/Inicio';
import Preguntas from './pages/Preguntas';
import Productos from './pages/Productos';
import Header from './componentes/Header';
import Login from './pages/Login';
import Registro from './pages/Registro';

function App() {

  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Inicio />} />
      <Route path='/preguntas' element={<Preguntas />} />
      <Route path='/productos' element={<Productos />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Registro' element={<Registro />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
