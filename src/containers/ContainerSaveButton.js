import { connect }    from 'react-redux';
import SaveButton     from '../components/SaveButton';
import type { State, Dispatch } from '../types';
import { saveUsuarioFabrica }   from '../actions/CallBackend';

export const mapStateToProps = (state: State) => {
    return {
       gameState: state.gameState,
       botones: state.botones,
       configFabrica: state.configFabrica

    };
};

export const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        saveGame: (idJuego, ganancias, celdas) => {
           dispatch(saveUsuarioFabrica(idJuego, ganancias, celdas))
      }
    };
};

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);
  
export default connector(SaveButton);