import { useState, useEffect } from 'react';

function Catalogo({ agregarAlCarrito }) {
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState("");
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products?limit=30")
            .then((respuesta) => respuesta.json())
            .then((datos) => {
                setProductos(datos.products);
                setCargando(false);
            })
            .catch((error) => {
                setError("No se cargan los datos");
                setCargando(false);
            });
    }, []);

    if(cargando) {
        return <h1 className="text-center mt-5 text-white">Cargando catálogo...</h1>;
    }
    
    if(error) {
        return <h1 className="text-center mt-5 text-danger">{error}</h1>;
    }

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4 text-white">Catálogo de Productos</h1>
            
            <div className="row g-4">
                {productos.map((producto) => {
                    const iva = producto.price * 0.12;
                    const totalConIva = producto.price + iva;

                    return (
                        <div className="col-12 col-md-6 col-lg-4" key={producto.id}>
                            <div className="card h-100 shadow border-0 bg-white text-dark text-center p-3 rounded-3">
                                
                                <h4 className="card-title fw-bold mb-3">{producto.title}</h4>
                                
                                <img 
                                    src={producto.thumbnail} 
                                    className="card-img-top mx-auto mb-3" 
                                    alt={producto.title}
                                    style={{ height: '120px', objectFit: 'contain' }}
                                />
                                
                                <div className="card-body p-0 d-flex flex-column align-items-center">
                                    <p className="small text-muted mb-1">| Producto {producto.id} a Precio: ${producto.price.toFixed(2)} |</p>
                                    <p className="small text-muted mb-1">| IVA: ${iva.toFixed(2)} |</p>
                                    <p className="small fw-bold mb-3">| Total con IVA: ${totalConIva.toFixed(2)} |</p>
                                    
                                    <div className="mb-3">
                                        <span className="badge bg-success me-2 px-3 py-2">Disponible</span>
                                    </div>
                                    <div className="mb-3">
                                        <span className="badge bg-primary px-3 py-2">Existencias: {producto.stock}</span>
                                    </div>
                                    
                                    <div className="mt-auto w-100 pt-3">
                                        {/* Botón único que ocupa todo el ancho inferior */}
                                        <button 
                                            className="btn btn-primary w-100 fw-bold shadow-sm py-2"
                                            onClick={() => agregarAlCarrito(producto.title, producto.price)}
                                        >
                                            Agregar al carrito
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Catalogo;