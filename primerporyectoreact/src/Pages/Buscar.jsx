import { useState } from "react";
import { Link } from "react-router-dom";

function Buscar() {
  const [texto, setTexto] = useState("");
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [buscado, setBuscado] = useState(false);

  function buscar(e) {
    e.preventDefault();
    if (texto.trim() === "") {
      return;
    }
    setCargando(true);
    fetch("https://dummyjson.com/products/search?q=" + texto)
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setProductos(datos.products);
        setCargando(false);
        setBuscado(true);
      });
  }

  // 1. Función para el botón Limpiar
  function limpiar() {
    setTexto("");
    setProductos([]);
    setBuscado(false);
  }

  return (
    <div>
      <h2 className="mb-3">Buscar productos</h2>

      <form className="d-flex gap-2 mb-4" onSubmit={buscar}>
        <input
          className="form-control"
          placeholder="Ejemplo: phone, laptop, perfume"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        <button type="submit" className="btn btn-light">
          Buscar
        </button>
        {/* type="button" evita que este botón envíe el formulario */}
        <button type="button" className="btn btn-secondary" onClick={limpiar}>
          Limpiar
        </button>
      </form>

      {cargando ? <p className="alert alert-info">Buscando...</p> : null}

      {/* 2. Mensaje sin resultados en rojo si devuelve 0 productos */}
      {buscado && !cargando && productos.length === 0 ? (
        <p className="alert alert-danger fw-bold">
          No hay productos que coincidan
        </p>
      ) : null}

      {buscado && !cargando && productos.length > 0 ? (
        <p className="text-light">
          Se encontraron {productos.length} productos para "{texto}"
        </p>
      ) : null}

      <div className="row g-3">
        {productos.map((p) => (
          <div className="col-md-4" key={p.id}>
            <div className="card text-dark h-100 shadow-sm">
              <img
                src={p.thumbnail}
                className="card-img-top p-2"
                alt={p.title}
                style={{ height: "180px", objectFit: "contain" }}
              />

              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{p.title}</h5>
                <p className="card-text text-muted mb-3">
                  Categoría: {p.category}
                </p>

                <Link
                  to={"/producto/" + p.id}
                  className="btn btn-outline-primary btn-sm mt-auto"
                >
                  Ver detalle
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Buscar;