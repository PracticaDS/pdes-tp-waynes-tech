import type { Id, ButtonAction } from '../types/ButtonType';

export const selectButton = (id: Id): ButtonAction => {
  return {
    type: 'SELECT',
    id
  };
};
