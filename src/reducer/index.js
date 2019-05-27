import { combineReducers } from 'redux';

import botones from './ButtonReducer';
import configFabrica from  './FabricaReducer';
import gameState from './CeldaReducer';

export default combineReducers({
    botones, 
    configFabrica,
    gameState
 
});
