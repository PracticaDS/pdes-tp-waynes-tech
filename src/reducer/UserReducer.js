
import type { Action } from '../types';
import type {Usuario} from './types/GameState';


const usuario = (state = {}, action: Action): Usuario => {
 switch (action.type) {
   case 'LOGIN_USER_OK':
     return {username: action.fabrica.username};
   default:
     return state;
 }
};

export default usuario;