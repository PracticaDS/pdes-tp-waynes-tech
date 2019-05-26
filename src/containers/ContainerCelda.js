import { connect }    from 'react-redux';
import Celda          from '../components/Celda';
import type { State, Dispatch } from '../types';
import { ponerMaquina, tick } from '../actions/MaquinaAction';



export const mapStateToProps = (state: State) => {
    return {
       botones: state.botones,
       gameState: state.gameState,
       configFabrica: state.configFabrica
    }
};

const doActionsOnSelection = (boton, columna, fila, dispatch) => {
 
    setInterval(() => { dispatch(tick());} , 3000);
    return(
       ponerMaquina(boton, columna, fila)
   )
};

export const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
         onClickCelda: (boton, columna, fila) => {
           dispatch(doActionsOnSelection(boton, columna, fila,dispatch))
      }
    };
};

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);
  
export default connector(Celda);