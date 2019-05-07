import { Id, Buttons } from '../types/ButtonType';
import type { MaquinaAction } from '../types';


const celdas = (state: Celdas = [], action: MaquinaAction): Celdas => {
    switch (action.type) {
      case 'AGREGAR_MAQUINA':
        return state;
      default:
        return state;
    }
   };
   
   export default celdas;