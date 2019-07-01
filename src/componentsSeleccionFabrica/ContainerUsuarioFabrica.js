import UsuarioFabricaPage       from '../componentsSeleccionFabrica/UsuarioFabricas';
import { connect }              from 'react-redux';
import type { State } from '../types';


export const mapStateToProps = (state: State) => {
    return {
        botones: state.botones,
        gameState: state.gameState,
        configFabrica: state.configFabrica,
        usuario: state.usuario
    };
};

/*
export const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        crearFabrica: (username, idFabrica, ganancias, celdas) => {
           dispatch(saveUsuarioFabrica(username, idFabrica, ganancias, celdas))
      }
    };
};
*/

const connector = connect(
    mapStateToProps,
    null//mapDispatchToProps
);
  
export default connector(UsuarioFabricaPage);
