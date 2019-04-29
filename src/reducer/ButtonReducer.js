
import type { Id, Press, ButtonAction, Buttons } from '../types/ButtonType';


const selectButton = (botones: Buttons, id: Id): Buttons => {

  /** aun no se que apsa si se selecciona un boton */
  botones.map(t => (t.id !== id ? { ...t, press: 'unselected' } : { ...t, press: 'selected' }));
  return botones;
};


const botones = (state: Buttons = [], action: ButtonAction): Buttons => {
  switch (action.type) {
    case 'SELECT':
      return selectButton(state, action.id);

    case 'OTRO':
      return state;

    default:
      return state;
  }
};

export default botones;
