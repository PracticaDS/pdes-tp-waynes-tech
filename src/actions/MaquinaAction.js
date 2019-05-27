import type { ButtonType }    from '../types/ButtonType';
import type { Id }    from '../types/Utils';
import type { MaquinaAction } from '../types/Maquina';
import type { Ganancias } from '../types/GameState';

export const ponerMaquina = (boton: ButtonType, idCelda: Id, idFila: Id, ganancias: Ganancias): MaquinaAction => {
  return {
    type: (boton === undefined ? '@@INIT' : boton.action), boton, idCelda, idFila, ganancias
  };
};

export const tick = (): MaquinaAction => {
  return {
    type: 'TICK'
  };
};

