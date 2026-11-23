import React from 'react';
import { Link } from 'react-router-dom';

function Encabezado({ titulo }) {
  return (
    <header>
      <h1 className="text-center py-3">{titulo}</h1>
      <nav className="d-flex flex-wrap justify-content-center">
        <Link to="/" className="btn btn-light m-1">Inicio</Link>
        <Link to="/productos" className="btn btn-light m-1">Productos</Link>
        <Link to="/contactos" className="btn btn-light m-1">Contactos</Link>
        <Link to="/compras" className="btn btn-light m-1">Mis Compras</Link>
        <Link to="/catalogo" className="btn btn-light m-1">Catálogo</Link>
        <Link to="/ofertas" className="btn btn-light m-1">Ofertas</Link>
        <Link to="/buscar" className="btn btn-light m-1">Buscar</Link>
      </nav>
    </header>
  );
}

export default Encabezado;