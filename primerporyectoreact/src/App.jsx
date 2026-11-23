import './App.css';
import Pie from './components/Pie.jsx';
import Encabezado from './components/Encabezado.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import Inicio from './Pages/Inicio.jsx';
import Contactos from './Pages/Contactos.jsx';
import Productos from './Pages/Productos.jsx';
import Compras from './Pages/Compras.jsx';
import Catalogo from './Pages/Catalogoweb.jsx';
import Ofertas from './Pages/Ofertas.jsx';
import Buscar from './Pages/Buscar.jsx';
import DetalleProducto from './Pages/DetalleProducto.jsx';

function App() {
  const [lista, setLista] = useState([]);

  function agregarProducto(nombre, precio) {
    const nuevoProducto = {
      nombre: nombre,
      precio: precio
    };
    setLista([...lista, nuevoProducto]);
  }

  function vaciarCarrito() {
    setLista([]);
  }

  return (
    <BrowserRouter>
      <main className="container bg-primary text-white min-vh-100 pb-4">
        <section>
          <Encabezado titulo="Puce-Ibarra AndreeValencia-Fausto-Liquinchana " />
          <div className="p-3">
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/contactos" element={<Contactos />} />
              <Route path="/productos" element={<Productos agregarProducto={agregarProducto} />} />
              <Route path="/compras" element={<Compras lista={lista} vaciarCarrito={vaciarCarrito} />} />
              <Route path="/catalogo" element={<Catalogo agregarAlCarrito={agregarProducto} />} />
              <Route path="/ofertas" element={<Ofertas agregarAlCarrito={agregarProducto} />} />
              <Route path="/buscar" element={<Buscar agregar={agregarProducto} />} />
              <Route path="/producto/:id" element={<DetalleProducto agregar={agregarProducto} />} />
            </Routes>
          </div>
        </section>
        <section className="mt-5 text-center">
          <Pie />
        </section>
      </main>
    </BrowserRouter>
  );
}

export default App;