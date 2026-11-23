import React, { useState } from "react";

function Compras({ lista, vaciarCarrito }) {
    // Estados del Login (Formulario)
    const [nombres, setNombres] = useState("");
    const [apellidos, setApellidos] = useState("");
    const [sexo, setSexo] = useState("");
    const [edad, setEdad] = useState("");
    const [pais, setPais] = useState("");
    const [ciudad, setCiudad] = useState("");

    // Estado para el mensaje de confirmación exitosa
    const [mensajeExito, setMensajeExito] = useState("");

    const licores = ["Pilsener", "Club", "Caran", "Nevada"];
    
    let subtotal = 0;
    let iva = 0;
    let ice = 0;
    let contieneLicores = false;

    // 1. Forzamos la conversión a número entero seguro para evitar errores lógicos
    const edadNum = parseInt(edad, 10) || 0;
    const hayEdad = edad.toString().trim() !== "";

    // Cálculo de impuestos
    lista.forEach((producto) => {
        const precio = Number(producto.precio) || 0;
        subtotal += precio;
        
        const esLicor = licores.includes(producto.nombre);
        if (esLicor) {
            contieneLicores = true;
            ice += precio * 0.10; // 10% representativo de ICE a licores
        }

        if (!hayEdad) {
            iva += precio * 0.15; 
        } else if (edadNum < 18) {
            iva += 0; // Menor de edad no paga IVA
        } else if (edadNum >= 65) {
            iva += precio * 0.08; // Adulto mayor paga 8%
        } else {
            iva += precio * 0.15; // Adulto normal (18 a 64) paga 15%
        }
    });

    const totalGeneral = subtotal + iva + ice;
    
    // Validaciones de seguridad
    const errorLicores = contieneLicores && hayEdad && edadNum < 18;
    
    // Validamos que ningún campo del formulario esté vacío
    const formularioLleno = nombres && apellidos && sexo && edad && pais && ciudad;
    
    // 2. Lógica del mensaje estrictamente validada
    let mensajeImpuestos = "";
    
    if (hayEdad) {
        if (edadNum < 18) {
            mensajeImpuestos = "Menor de edad: 0% IVA.";
        } else if (edadNum >= 65) {
            mensajeImpuestos = "Adulto mayor: IVA reducido al 8%.";
        } else {
            mensajeImpuestos = "Adulto: IVA estándar (15%).";
        }
    }

    // Función que procesa la compra al presionar "Generar Factura"
    const generarFactura = () => {
        vaciarCarrito();
        setNombres("");
        setApellidos("");
        setSexo("");
        setEdad("");
        setPais("");
        setCiudad("");
        
        setMensajeExito("¡Factura generada con éxito!");
        
        // Borra el mensaje de éxito después de 4 segundos
        setTimeout(() => {
            setMensajeExito("");
        }, 4000);
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4 fw-bold">Mi Carrito de Compras</h2>
            
            {/* Mensaje flotante de éxito al comprar */}
            {mensajeExito && (
                <div className="alert alert-success fw-bold text-center shadow-sm">
                    {mensajeExito}
                </div>
            )}

            <div className="row">
                {/* COLUMNA IZQUIERDA: Lista de Productos */}
                <div className="col-lg-7 mb-4">
                    <div className="card shadow bg-dark text-white border-0">
                        <div className="card-header border-secondary d-flex justify-content-between align-items-center py-3">
                            <h4 className="card-title fw-bold mb-0">Productos Seleccionados</h4>
                            <span className="badge bg-primary rounded-pill fs-6">
                                {lista.length} artículos
                            </span>
                        </div>
                        
                        <div className="card-body p-0">
                            {lista.length === 0 ? (
                                <div className="text-center py-5">
                                    <h5 className="text-muted">El carrito está vacío.</h5>
                                </div>
                            ) : (
                                <ul className="list-group list-group-flush">
                                    {lista.map((producto, index) => (
                                        <li key={index} className="list-group-item bg-dark text-white border-secondary d-flex justify-content-between align-items-center px-4 py-3">
                                            <strong className="fs-5">{producto.nombre}</strong>
                                            <span className="badge bg-success rounded-pill fs-6 shadow-sm">
                                                ${Number(producto.precio).toFixed(2)}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>

                {/* COLUMNA DERECHA: Login y Resumen de Compra */}
                <div className="col-lg-5">
                    <div className="card shadow border-0" style={{ backgroundColor: "#0a192f", color: "#e6f1ff" }}>
                        <div className="card-body p-4">
                            <h4 className="fw-bold text-center border-bottom border-secondary pb-3 mb-4">
                                Datos de Facturación
                            </h4>
                            
                            <div className="mb-3 text-start">
                                <label className="form-label small fw-bold mb-1">Nombres:</label>
                                <input type="text" className="form-control bg-dark text-white border-secondary" value={nombres} onChange={(e) => setNombres(e.target.value)} />
                            </div>

                            <div className="mb-3 text-start">
                                <label className="form-label small fw-bold mb-1">Apellidos:</label>
                                <input type="text" className="form-control bg-dark text-white border-secondary" value={apellidos} onChange={(e) => setApellidos(e.target.value)} />
                            </div>
                            
                            <div className="row mb-3">
                                <div className="col-6 text-start">
                                    <label className="form-label small fw-bold mb-1">Sexo:</label>
                                    <select className="form-select bg-dark text-white border-secondary" value={sexo} onChange={(e) => setSexo(e.target.value)}>
                                        <option value="">Seleccione...</option>
                                        <option value="Hombre">Hombre</option>
                                        <option value="Mujer">Mujer</option>
                                        <option value="Otro">Otro</option>
                                    </select>
                                </div>
                                <div className="col-6 text-start">
                                    <label className="form-label small fw-bold mb-1">Edad:</label>
                                    <input type="number" min={1} className="form-control bg-dark text-white border-secondary" value={edad} onChange={(e) => setEdad(e.target.value)} />
                                </div>
                            </div>
                            
                            <div className="row mb-4">
                                <div className="col-6 text-start">
                                    <label className="form-label small fw-bold mb-1">País:</label>
                                    <select className="form-select bg-dark text-white border-secondary" value={pais} onChange={(e) => setPais(e.target.value)}>
                                        <option value="">Seleccione...</option>
                                        <option value="Ecuador">Ecuador</option>
                                        <option value="Colombia">Colombia</option>
                                        <option value="Peru">Perú</option>
                                    </select>
                                </div>
                                <div className="col-6 text-start">
                                    <label className="form-label small fw-bold mb-1">Ciudad:</label>
                                    <select className="form-select bg-dark text-white border-secondary" value={ciudad} onChange={(e) => setCiudad(e.target.value)}>
                                        <option value="">Seleccione...</option>
                                        <option value="Ibarra">Ibarra</option>
                                        <option value="Quito">Quito</option>
                                        <option value="Guayaquil">Guayaquil</option>
                                        <option value="Bogota">Bogotá</option>
                                        <option value="Lima">Lima</option>
                                    </select>
                                </div>
                            </div>

                            {mensajeImpuestos && (
                                <div className="alert alert-info py-2 text-center small mb-2 text-dark">
                                    <strong>Aviso:</strong> {mensajeImpuestos}
                                </div>
                            )}
                            {errorLicores && (
                                <div className="alert alert-danger py-2 text-center small mb-3 text-dark">
                                    <strong>Alerta:</strong> No se pueden vender licores a menores de edad.
                                </div>
                            )}

                            <h5 className="fw-bold text-center border-bottom border-secondary pb-2 mt-4 mb-3">
                                Resumen
                            </h5>
                            
                            <div className="d-flex justify-content-between mb-2">
                                <span className="text-light">Total parcial:</span>
                                <span className="fw-bold">${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="d-flex justify-content-between mb-2">
                                <span className="text-light">IVA:</span>
                                <span className="fw-bold">${iva.toFixed(2)}</span>
                            </div>
                            <div className="d-flex justify-content-between mb-3 text-warning">
                                <span>Impuesto ICE:</span>
                                <span className="fw-bold">${ice.toFixed(2)}</span>
                            </div>
                            
                            <hr className="border-secondary" />
                            
                            <div className="d-flex justify-content-between align-items-center mb-4 mt-3">
                                <span className="fs-5 fw-bold">Total a Pagar:</span>
                                <span className="fs-3 fw-bold text-success">${totalGeneral.toFixed(2)}</span>
                            </div>

                            <button 
                                className="btn btn-primary w-100 fw-bold py-2 shadow-sm"
                                disabled={lista.length === 0 || errorLicores || !formularioLleno}
                                onClick={generarFactura}
                            >
                                Generar Factura
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Compras;