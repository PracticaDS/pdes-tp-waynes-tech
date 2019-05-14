
 import { Id, Buttons } from '../types/ButtonType';
 import type { Action } from '../types';

const selectButton = (botones: Buttons, id: Id): Buttons => {

  return botones.map(t => (t.id !== id ? { ...t, press: 'unselected' } : { ...t, press: 'selected' }));

};


const botones = (state: Buttons = [], action: Action): Buttons => {
  switch (action.type) {
    case '@@INIT':
      return state;
    case 'SELECT':
      return selectButton(state, action.id);
    default:
      return state;
  }
};


export default botones;
