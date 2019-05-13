import { ConfigFabrica } from '../types/GameState';
import type { Action } from '../types';



const configFabrica = (state: ConfigFabrica = {}, action: Action): ConfigFabrica => {

 switch (action.type) {
   case '@@INIT':
     return state;
   default:
     return state;
 }
};

export default configFabrica;