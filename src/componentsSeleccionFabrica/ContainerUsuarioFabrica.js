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

const connector = connect(
    mapStateToProps,
    null
);
  
export default connector(UsuarioFabricaPage);
