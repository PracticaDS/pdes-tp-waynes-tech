import { connect }    from 'react-redux';
import Fabrica        from '../components/Fabrica';
import type { State } from '../types';


export const mapStateToProps = (state: State) => {
    return {
       gameState: state.gameState,
       botones: state.botones,
       configFabrica: state.configFabrica,
       usuario: state.usuario
    };
};


const connector = connect(
    mapStateToProps,
    null
);
  
export default connector(Fabrica);
  