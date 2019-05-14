import type { ButtonType }    from '../types/ButtonType';
import type { Id }    from '../types/Utils';
import type { MaquinaAction } from '../types/Maquina';

export const ponerMaquina = (boton: ButtonType, idCelda: Id, idFila: Id): MaquinaAction => {
  return {
    type: (boton === undefined ? '@@INIT' : boton.action), boton, idCelda, idFila
  };
};

