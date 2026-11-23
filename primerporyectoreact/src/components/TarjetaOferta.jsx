import React from "react";

function TarjetaOferta({ nombre, precio, descuento, agregarAlCarrito }) {
    const valorDescuento = (precio * descuento) / 100;
    const precioFinal = precio - valorDescuento;
    const iva = precioFinal * 0.15;
    const totalConIva = precioFinal + iva;

    const colorStack = descuento >= 10 ? "bg-danger badge" : "bg-primary badge";

    return (
        <div className="card text-dark shadow-sm m-2" style={{ width: "280px" }}>
            <div className="card-body text-center d-flex flex-column">
                <h4 className="card-title fw-bold mb-3">{nombre}</h4>

                <p className="card-text mb-1">
                    | Antes: ${precio.toFixed(2)} |
                </p>
                <p className="card-text mb-1">
                    | Descuento: {descuento.toFixed(2)}% |
                </p>
                <p className="card-text mb-1 text-success fw-bold">
                    | Ahorro: ${valorDescuento.toFixed(2)} |
                </p>
                <p className="card-text mb-2 fw-bold">
                    | Ahora: ${precioFinal.toFixed(2)} |
                </p>
                <p className="card-text mb-3 small text-muted">
                    | IVA: ${iva.toFixed(2)} | <br />
                    | Con IVA: ${totalConIva.toFixed(2)} |
                </p>

                <div className="mt-auto">
                    <span className={`${colorStack} mb-3 px-3 py-2`}>
                        {descuento >= 10 ? "Gran Oferta" : "Oferta"}
                    </span>
                    <button
                        className="btn btn-primary w-100 fw-bold shadow-sm py-2"
                        onClick={() => agregarAlCarrito(nombre, Number(precioFinal.toFixed(2)))}
                    >
                        Agregar al Carrito
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TarjetaOferta;