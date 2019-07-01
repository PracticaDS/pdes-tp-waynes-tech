import React from 'react';

export const Fabrica = ({nombre, ganancias, idFabrica, username, recuperarFabrica}): Props => (
    <div onClick={() => recuperarFabrica(username, idFabrica)} >
        Nombre: {nombre}
        Ganancias: {ganancias}
    </div>
);

export default Fabrica;