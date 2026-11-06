import {Link} from 'react-router-dom';
import "./header.css"
import {UserRound} from "lucide-react"
function Header() {
  return (
    <header>
        <nav>
            <Link to='/'>Inicio</Link>
            <Link to='/productos'>Productos</Link>
            <Link to='/preguntas'>Preguntas</Link>
        </nav>
    </header>
  )
  }

  export default Header;