import React, { useState } from "react";
import { Link } from "react-router-dom";

function CardProductos({
    id,
    nombre,
    categoria,
    precio,
    disponible,
    stock,
    cantidad,
    numeroproducto,
    agregar,
    onAgregar,
    agregarProducto
}) {
    const [contador, setContador] = useState(0);
    const [descuento, setDescuento] = useState(1);

    // Compatibilidad con las props nuevas (Buscar) y las antiguas (Productos)
    const existencias = stock ?? cantidad ?? 0;
    const funcionAgregar = agregar || onAgregar || agregarProducto;

    const precioNum = Number(precio) || 0;
    const iva = precioNum * 0.15;
    const totalUnitario = precioNum + iva;

    const subtotal = contador * precioNum;
    const valorDescuento = subtotal * (descuento / 100);
    const totalConDescuento = subtotal - valorDescuento;

    let colorStack;
    if (existencias >= 10) {
        colorStack = "bg-primary badge";
    } else if (existencias > 5 && existencias < 10) {
        colorStack = "bg-warning text-dark badge";
    } else {
        colorStack = "bg-danger badge";
    }

    function agregarProducto1() {
        console.log("Producto agregado:", nombre, "Precio:", precioNum);
        if (funcionAgregar) {
            funcionAgregar(nombre, precioNum);
        }
    }

    function mostrarproducto() {
        setContador(contador + 1);
        const precioConDescuento = Number(
            (precioNum - precioNum * (descuento / 100)).toFixed(2)
        );
        if (funcionAgregar) {
            funcionAgregar(nombre, precioConDescuento);
        }
    }

    return (
        <div className="card text-dark shadow-sm m-2" style={{ width: "280px" }}>
            <div className="card-body text-center">
                <h4 className="card-title fw-bold">{nombre}</h4>
                {categoria && (
                    <span className="badge bg-secondary mb-2">{categoria}</span>
                )}
                <p className="card-text mb-1">
                    | Producto {numeroproducto ?? id} a Precio: ${precioNum.toFixed(2)} |
                </p>
                <p className="card-text mb-2">
                    | IVA: ${iva.toFixed(2)} | <br />
                    <strong>| Total con IVA: ${totalUnitario.toFixed(2)} |</strong>
                </p>

                <p className="fw-bold badge bg-success fs-6">
                    Subtotal: ${subtotal.toFixed(2)}
                </p>
                <br />

                <span className={disponible ? "bg-success badge" : "bg-danger badge"}>
                    {disponible ? "Disponible" : "Agotado"}
                </span>

                <br /><br />

                <span className={colorStack}>
                    Existencias: {existencias}
                </span>

                <br /><br />

                <div className="d-flex justify-content-center gap-2">
                    <button
                        type="button"
                        className="btn btn-primary px-3"
                        onClick={mostrarproducto}
                    >
                        Agregar
                    </button>
                    <button
                        type="button"
                        className="btn btn-success px-3"
                        onClick={agregarProducto1}
                    >
                        Comprar
                    </button>
                </div>

                {/* Enlace de la Parte B.3: solo aparece si la tarjeta recibe un id */}
                {id && (
                    <Link to={"/producto/" + id} className="btn btn-link btn-sm w-100 mt-2">
                        Ver detalle
                    </Link>
                )}

                <h3 className="mt-3">Cantidad: {contador}</h3>

                <h6 className="mt-3">Descuentos</h6>
                <input
                    type="number"
                    min={0}
                    max={100}
                    placeholder="Ingrese el descuento"
                    className="form-control mb-2 text-center"
                    value={descuento}
                    onChange={(e) => setDescuento(parseFloat(e.target.value) || 0)}
                />

                <h6 className="mt-2 text-success fw-bold">
                    Total con descuento: ${totalConDescuento.toFixed(2)}
                </h6>
            </div>
        </div>
    );
}

export default CardProductos;