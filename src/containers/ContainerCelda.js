import { connect }    from 'react-redux';
import Celda          from '../components/Celda';
import type { State } from '../types';
import { ponerMaquina } from '../actions/MaquinaAction';

/*
export const mapStateToProps = (state: State) => {
    return {
       botones: state.botones
    };
};
*/

export const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
       // onCeldaClick: boton, idCelda, idFila => {
         //   dispatch(ponerMaquina(boton, idCelda, idFila));
         onCeldaClick: boton => {
           dispatch(ponerMaquina(boton));
      }
    };
};

const connector = connect(
    null,
    mapDispatchToProps
);
  
export default connector(Celda);