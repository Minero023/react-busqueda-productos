import { useState, useEffect } from 'react';
import TarjetaOferta from '../components/TarjetaOferta.jsx';

function Ofertas({ agregarAlCarrito }) {
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState("");
    const [ofertas, setOfertas] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/products?limit=8")
            .then((respuesta) => respuesta.json())
            .then((datos) => {
                setOfertas(datos.products);
                setCargando(false);
            })
            .catch((error) => {
                setError("No se cargan los datos");
                setCargando(false);
            });
    }, []);

    if (cargando) {
        return <h1 className="text-center mt-5 text-white">Cargando ofertas...</h1>;
    }

    if (error) {
        return <h1 className="text-center mt-5 text-danger">{error}</h1>;
    }

    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4 text-white">Ofertas Especiales</h1>
            <div className="row g-4 justify-content-center">
                {ofertas.map((oferta) => (
                    <TarjetaOferta
                        key={oferta.id}
                        nombre={oferta.title}
                        precio={oferta.price}
                        descuento={oferta.discountPercentage}
                        agregarAlCarrito={agregarAlCarrito}
                    />
                ))}
            </div>
        </div>
    );
}

export default Ofertas;