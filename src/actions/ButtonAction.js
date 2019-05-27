import type { Id, ButtonAction } from '../types/ButtonType';
import type { DetalleMaquina, CostoMaquina } from '../types/GameState';

export const selectButton = (id: Id, name: DetalleMaquina , price: CostoMaquina): ButtonAction => {
  return {
    type: 'SELECT',
    id, name, price
  };
};
