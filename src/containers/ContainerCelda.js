import { connect }    from 'react-redux';
import Celda          from '../components/Celda';
import type { State } from '../types';
import { ponerMaquina } from '../actions/MaquinaAction';


export const mapStateToProps = (state: State) => {
    return {
       botones: state.botones,
       celdas: state.celdas,
       configFabrica: state.configFabrica,
       statusInfoBox: state.statusInfoBox
    };
};


export const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
         onClickCelda: (boton, columna, fila, ganancias) => {
           dispatch(ponerMaquina(boton, columna, fila, ganancias));
      }
    };
};

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);
  
export default connector(Celda);