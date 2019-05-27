import type {Id, Image} from './Utils';
import type {ButtonType} from './ButtonType';

export type MaquinaType = {
    +id: Id,
    +image: Image,
    +direccion: MaquinaDireccion,
    +mover: false
}

export type MaquinaDireccion = 'NORTE' | 'SUR' | 'ESTE' | 'OESTE';

export type MaquinaAction = 
| { type: 'AGREGAR_MAQUINA', +boton: ButtonType, +idCelda :Id, +idFila: Id }
| { type: 'BORRAR', +boton: ButtonType, +idCelda :Id, +idFila: Id }
| { type: 'ROTAR', +boton: ButtonType, +idCelda :Id, +idFila: Id }
| { type: 'MOVER', +boton: ButtonType, +idCelda :Id, +idFila: Id }
| { type: 'TICK' };