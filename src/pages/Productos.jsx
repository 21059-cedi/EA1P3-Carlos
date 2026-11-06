
import Tarjeta from "../componentes/Tarjeta";
import Boton from "../componentes/Boton";
import Modal from "../componentes/Modal";
import { useState } from "react"; 

function Productos() {
  const[mostrar, setMostrar] = useState(false);

  function cerrarModal() {
    setMostrar(false);
  }

  function mostrarModal() {
    setMostrar(true);
  }
  return (
    <main>
      <h1>Productos</h1>
      <Tarjeta
        imagen="/src/images.webp"
        titulo="Hamburguesa"
        descripcion="Incluye papas y refresco"
      >
        <Boton funcion={mostrarModal}>Abrir modal</Boton>
        {mostrar && (
        <Modal>
          <h2>Listo</h2>
          <p>Haz comprado una hamburguesa</p>
          <Boton funcion={cerrarModal}>Aceptar</Boton>
        </Modal>
      )
      }
      </Tarjeta>
      <Tarjeta
        imagen="/src/"
        titulo="Papas fritas"
        descripcion="Individuales"
      >
        <Boton funcion={mostrarModal}>Abrir modal</Boton>
        {mostrar && (
        <Modal>
          <h2>Listo</h2>
          <p>Haz comprado unas papas fritas</p>
          <Boton funcion={cerrarModal}>Aceptar</Boton>
        </Modal>
      )
      }
      </Tarjeta>
      <Tarjeta
        imagen="/src/"
        titulo="Papas grandes"
        descripcion="Para compartir"
      >
        <Boton funcion={mostrarModal}>Abrir modal</Boton>
        {mostrar && (
        <Modal>
          <h2>Listo</h2>
          <p>Haz comprado unas papas grandes</p>
          <Boton funcion={cerrarModal}>Aceptar</Boton>
        </Modal>
      )
      }
      </Tarjeta>
      <Tarjeta
        imagen="/src/"
        titulo="Rebanada de pizza"
        descripcion=""
      >
        <Boton funcion={mostrarModal}>Abrir modal</Boton>
        {mostrar && (
        <Modal>
          <h2>Listo</h2>
          <p>Haz comprado una rebanada de pizza</p>
          <Boton funcion={cerrarModal}>Aceptar</Boton>
        </Modal>
      )
      }
      </Tarjeta>
      <Tarjeta
        imagen="/src/"
        titulo="Pizza completa"
        descripcion=""
      >
        <Boton funcion={mostrarModal}>Abrir modal</Boton>
        {mostrar && (
        <Modal>
          <h2>Listo</h2>
          <p>Haz comprado una pizza completa</p>
          <Boton funcion={cerrarModal}>Aceptar</Boton>
        </Modal>
      )
      }
      </Tarjeta>
      <Tarjeta
        imagen="/src/"
        titulo="Refresco chico"
        descripcion=""
      >
        <Boton funcion={mostrarModal}>Abrir modal</Boton>
        {mostrar && (
        <Modal>
          <h2>Listo</h2>
          <p>Haz comprado un refresco chico</p>
          <Boton funcion={cerrarModal}>Aceptar</Boton>
        </Modal>
      )
      }
      </Tarjeta>
      <Tarjeta
        imagen="/src/"
        titulo="Refresco grande"
        descripcion=""
      >
        <Boton funcion={mostrarModal}>Abrir modal</Boton>
        {mostrar && (
        <Modal>
          <h2>Listo</h2>
          <p>Haz comprado un refresco grande</p>
          <Boton funcion={cerrarModal}>Aceptar</Boton>
        </Modal>
      )
      }
      </Tarjeta>
      <Tarjeta
        imagen="/src/"
        titulo="Nuggets"
        descripcion=""
      >
        <Boton funcion={mostrarModal}>Abrir modal</Boton>
        {mostrar && (
        <Modal>
          <h2>Listo</h2>
          <p>Haz comprado unos nuggets</p>
          <Boton funcion={cerrarModal}>Aceptar</Boton>
        </Modal>
      )
      }
      </Tarjeta>
      <Tarjeta
        imagen="/src/"
        titulo="Dedos de queso"
        descripcion=""
      >
        <Boton funcion={mostrarModal}>Abrir modal</Boton>
        {mostrar && (
        <Modal>
          <h2>Listo</h2>
          <p>Haz comprado unos dedos de queso</p>
          <Boton funcion={cerrarModal}>Aceptar</Boton>
        </Modal>
      )
      }
      </Tarjeta>
    </main>
  )
}
export default Productos;