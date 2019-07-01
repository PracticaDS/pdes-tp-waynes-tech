import { connect }              from 'react-redux';
import SaveButton               from '../components/SaveButton';
import type { State, Dispatch } from '../types';
import { saveUsuarioFabrica }   from '../actions/CallBackend';

export const mapStateToProps = (state: State) => {
    return {
       gameState: state.gameState,
       botones: state.botones,
       configFabrica: state.configFabrica,
       usuario: state.usuario

    };
};

export const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        saveGame: (username, idFabrica, ganancias, celdas) => {
           dispatch(saveUsuarioFabrica(username, idFabrica, ganancias, celdas))
      }
    };
};

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);
  
export default connector(SaveButton);