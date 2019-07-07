import CreateFabricaButton       from '../componentsSeleccionFabrica/CreateFabricaButton';
import { connect }              from 'react-redux';
import type { State } from '../types';
import {crearFabrica} from '../actions/CallBackend';


export const mapStateToProps = (state: State) => {
    return {
        botones: state.botones,
        gameState: state.gameState,
        configFabrica: state.configFabrica,
        usuario: state.usuario
    };
};


export const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        crearFabrica: (username,fabricaName, ganancias) => {
           dispatch(crearFabrica(username, fabricaName,ganancias))
      }
    };
};


const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);
  
export default connector(CreateFabricaButton);
