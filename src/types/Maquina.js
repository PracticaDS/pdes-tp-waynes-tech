import type {Id, Image} from './Utils';

export type MaquinaType = {
    +id: Id,
    +image: Image
}

export type MaquinaAction = 
| { type: 'AGREGAR_MAQUINA' }