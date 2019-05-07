import { combineReducers } from 'redux';

import botones from './ButtonReducer';
import configFabrica from  './FabricaReducer';
import celdas from './CeldaReducer';

export default combineReducers({
    botones, // TODO: add more reducers here if needed
    configFabrica,
    celdas
 
});
