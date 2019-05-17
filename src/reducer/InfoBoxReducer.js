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

const statusInfoBox = (state: StatusInfoBox = {}, action: Action): StatusInfoBox => {
    switch (action.type) {
   case 'SELECT':
     return cambiarInfoBox(state, action);
   default:
     return state;
 }
};

export default statusInfoBox;