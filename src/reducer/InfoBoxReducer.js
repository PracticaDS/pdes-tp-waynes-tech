import { StatusInfoBox } from '../types/GameState';
import type { Action } from '../types';


const cambiarInfoBox = (state: StatusInfoBox, action: Action): StatusInfoBox => {

    const nuevoEstado =  {
        detalle: action.name,
        costo: action.price,
        ganancias: state.ganancias
    };
    return nuevoEstado;
}

const restarGanancias = (state: StatusInfoBox, action: Action): StatusInfoBox => {

  const nuevoEstado =  {
      detalle: action.boton.name,
      costo: action.boton.price,
      ganancias: (state.ganancias >= action.boton.price ? state.ganancias - action.boton.price : state.ganancias )
  };
  return nuevoEstado;
}

const sumarGanancias = (state: StatusInfoBox, action: Action): StatusInfoBox => {

  return state;
}

const statusInfoBox = (state: StatusInfoBox = {}, action: Action): StatusInfoBox => {
    switch (action.type) {
   case 'SELECT':
     return cambiarInfoBox(state, action);
   case 'AGREGAR_MAQUINA':
     return restarGanancias(state, action);
   case 'TICK':
     return sumarGanancias(state, action);
   default:
     return state;
 }
};

export default statusInfoBox;