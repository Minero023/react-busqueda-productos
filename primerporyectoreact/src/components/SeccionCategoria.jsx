import React from "react";

function SeccionCategoria({ titulo, children }) {
    return (
        <section className="mb-4">
            <h3 className="border-bottom border-light pb-2 text-center">{titulo}</h3>
            <div className="d-flex flex-wrap justify-content-center gap-3 mt-3">
                {children}
            </div>
        </section>
    );
}

export default SeccionCategoria;