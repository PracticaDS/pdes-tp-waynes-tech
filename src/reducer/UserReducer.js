
import type { Action } from '../types';
import type {Usuario} from './types/GameState';


const usuario = (state = {}, action: Action): Usuario => {
 switch (action.type) {
   case 'LOGIN_USER_OK':
     return { username: action.fabrica.username, fabricas: action.fabrica.fabricas, idFabricaActual: state.idFabricaActual };
   case 'GET_FABRICA':
     return { username: state.username, fabricas: state.fabricas, idFabricaActual: action.idFabrica };
   default:
     return state;
 }
};

export default usuario;