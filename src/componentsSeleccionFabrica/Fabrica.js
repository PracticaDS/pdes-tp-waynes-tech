import React from 'react';

export const Fabrica = ({nombre, ganancias, id, recuperarFabrica, celdas}): Props => (
    <div className="fabrica" onClick={() => recuperarFabrica(ganancias, id, celdas)} >
        Nombre: {nombre}, Ganancias: {ganancias}
    </div>
);

export default Fabrica;