import { combineReducers } from 'redux';

import botones from './ButtonReducer';
import configFabrica from  './FabricaReducer';
import gameState from './CeldaReducer';
import usuario from './UserReducer';

export default combineReducers({
    botones, 
    configFabrica,
    gameState,
    usuario
 
});
