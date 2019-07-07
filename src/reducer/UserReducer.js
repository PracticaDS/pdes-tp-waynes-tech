
import type { Action } from '../types';
import type {Usuario} from './types/GameState';

const crearNuevaFabrica = (state, action) => {
   const result = [];
   const fabrics = action.fabrica.fabricas;
   for (var i=0; i< fabrics.length; i++){
    result.push({ id_fabrica:fabrics[i].id_fabrica, nombre:fabrics[i].nombre,
     ganancias: fabrics[i].ganancias, celdas: fabrics[i].celdas} );
   };
   return result;
}

const usuario = (state = {}, action: Action): Usuario => {
 switch (action.type) {
   case 'LOGIN_USER_OK':
     return { username: action.fabrica.username, fabricas: action.fabrica.fabricas, idFabricaActual: state.idFabricaActual };
   case 'GET_FABRICA':
     return { username: state.username, fabricas: state.fabricas, idFabricaActual: action.idFabrica };
   case 'CREAR_FABRICA_OK':
     return { username: state.username, fabricas: crearNuevaFabrica(state,action), idFabricaActual: 0 };
   default:
     return state;
 }
};

export default usuario;