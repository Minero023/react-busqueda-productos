import React, { useState } from "react";
import CardProductos from "../components/CardProductos.jsx";
import SeccionCategoria from "../components/SeccionCategoria.jsx";

function Productos({ agregarProducto }) {
    // Estados simples para el cliente (Sin objetos)
    const [nombreCliente, setNombreCliente] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [edad, setEdad] = useState("");

    // Estados simples para los productos y el total (Sin arreglos)
    const [listaProductos, setListaProductos] = useState("");
    const [totalGeneral, setTotalGeneral] = useState(0);

    // Función que suma al total local y guarda globalmente
    function manejarCompra(nombreProd, precioProd) {
        const textoNuevo = nombreProd + " ($" + precioProd.toFixed(2) + ")";
        
        if (listaProductos === "") {
            setListaProductos(textoNuevo);
        } else {
            setListaProductos(listaProductos + ", " + textoNuevo);
        }

        setTotalGeneral(totalGeneral + precioProd);

        // Envía el producto a App.jsx para que se vea en "Mis Compras"
        agregarProducto(nombreProd, precioProd);
    }

    function limpiarTodo() {
        setListaProductos("");
        setTotalGeneral(0);
    }

    return (
        <div className="container my-4" style={{ paddingRight: "320px" }}>
            <div className="text-center mb-4">
                <h2>Nuestros Productos</h2>
                <p>Descubre nuestra amplia selección de productos de calidad.</p>
            </div>
            
            <div className="mt-4">
                <h3 className="mb-3 text-center">Secciones</h3>
                
                <SeccionCategoria titulo="Snacks">
                    <CardProductos nombre="Cachitos" disponible={true} precio={1.5} cantidad={30} numeroproducto={1} onAgregar={manejarCompra} agregarProducto={manejarCompra} />
                    <CardProductos nombre="Papitas" disponible={true} precio={1} cantidad={5} numeroproducto={2} onAgregar={manejarCompra} agregarProducto={manejarCompra} />
                    <CardProductos nombre="Cueritos" disponible={true} precio={2} cantidad={30} numeroproducto={3} onAgregar={manejarCompra} agregarProducto={manejarCompra} />
                </SeccionCategoria>

                <SeccionCategoria titulo="Bebidas">
                    <CardProductos nombre="Pilsener" disponible={true} precio={5} cantidad={10} numeroproducto={1} onAgregar={manejarCompra} agregarProducto={manejarCompra} />
                    <CardProductos nombre="Club" disponible={true} precio={7} cantidad={7} numeroproducto={2} onAgregar={manejarCompra} agregarProducto={manejarCompra} />
                    <CardProductos nombre="Caran" disponible={false} precio={50} cantidad={5} numeroproducto={3} onAgregar={manejarCompra} agregarProducto={manejarCompra} />
                    <CardProductos nombre="Nevada" disponible={true} precio={10} cantidad={20} numeroproducto={4} onAgregar={manejarCompra} agregarProducto={manejarCompra} />
                </SeccionCategoria>

                <SeccionCategoria titulo="Dulces">
                    <CardProductos nombre="Galletas Chip-Ahoy" disponible={true} precio={1} cantidad={10} numeroproducto={1} onAgregar={manejarCompra} agregarProducto={manejarCompra} />
                    <CardProductos nombre="Dulce fresa" disponible={true} precio={0.50} cantidad={7} numeroproducto={2} onAgregar={manejarCompra} agregarProducto={manejarCompra} />
                    <CardProductos nombre="Galletas Oreo" disponible={false} precio={1} cantidad={5} numeroproducto={3} onAgregar={manejarCompra} agregarProducto={manejarCompra} />
                    <CardProductos nombre="Pastelillo de chocolate" disponible={true} precio={1.50} cantidad={20} numeroproducto={4} onAgregar={manejarCompra} agregarProducto={manejarCompra} />
                </SeccionCategoria>
            </div>

            {/* DIV FLOTANTE / FIJO A LA DERECHA CENTRADO */}
            <div 
                className="card text-dark shadow-lg p-3"
                style={{
                    position: "fixed",
                    right: "20px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "300px",
                    zIndex: 1050
                }}
            >
                <h5 className="fw-bold text-primary text-center border-bottom pb-2">
                    Datos del Cliente
                </h5>

                <div className="mb-2 text-start">
                    <label className="form-label small fw-bold mb-1">Nombre del Cliente:</label>
                    <input 
                        type="text" 
                        className="form-control form-control-sm" 
                        placeholder="Ingrese nombre"
                        value={nombreCliente}
                        onChange={(e) => setNombreCliente(e.target.value)}
                    />
                </div>

                <div className="mb-2 text-start">
                    <label className="form-label small fw-bold mb-1">Ciudad:</label>
                    <input 
                        type="text" 
                        className="form-control form-control-sm" 
                        placeholder="Ingrese ciudad"
                        value={ciudad}
                        onChange={(e) => setCiudad(e.target.value)}
                    />
                </div>

                <div className="mb-3 text-start">
                    <label className="form-label small fw-bold mb-1">Edad:</label>
                    <input 
                        type="number" 
                        min={1}
                        className="form-control form-control-sm" 
                        placeholder="Ingrese edad"
                        value={edad}
                        onChange={(e) => setEdad(e.target.value)}
                    />
                </div>

                <h6 className="fw-bold text-primary border-bottom pb-1 mt-2">
                    Productos Agregados
                </h6>

                <p className="small text-start my-2">
                    {listaProductos === "" ? "Ninguno todavía" : listaProductos}
                </p>

                <div className="border-top pt-2 mt-1 d-flex justify-content-between align-items-center">
                    <span className="fw-bold">Total:</span>
                    <span className="badge bg-success fs-6">${totalGeneral.toFixed(2)}</span>
                </div>

                <button 
                    type="button" 
                    className="btn btn-danger btn-sm w-100 mt-2"
                    onClick={limpiarTodo}
                >
                    Limpiar
                </button>
            </div>
        </div>
    );
}

export default Productos;