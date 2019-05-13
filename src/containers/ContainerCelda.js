import { connect }    from 'react-redux';
import Celda          from '../components/Celda';
import type { State } from '../types';
import { ponerMaquina } from '../actions/MaquinaAction';


export const mapStateToProps = (state: State) => {
    return {
       botones: state.botones,
       celdas: state.celdas,
       configFabrica: state.configFabrica
    };
};


export const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
         onClickCelda: (boton, columna, fila) => {
           dispatch(ponerMaquina(boton, columna, fila));
      }
    };
};

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);
  
export default connector(Celda);