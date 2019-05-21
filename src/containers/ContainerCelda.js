import { connect }    from 'react-redux';
import Celda          from '../components/Celda';
import type { State, Dispatch } from '../types';
import { ponerMaquina, tick } from '../actions/MaquinaAction';
import React from 'react';

export class ContainerCelda extends React.Component {


    componentDidMount() {
      

    }
  
    render() {
      return (
         <div></div>
      )
    }
  }


export const mapStateToProps = (state: State) => {
    return {
       botones: state.botones,
       celdas: state.celdas,
       configFabrica: state.configFabrica,
       statusInfoBox: state.statusInfoBox
    }
};

const doActionsOnSelection = (boton, columna, fila, ganancias, dispatch) => {
 
    setInterval(() => { dispatch(tick());} , 3000);
    return(
       ponerMaquina(boton, columna, fila, ganancias)
   )
};

export const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
         onClickCelda: (boton, columna, fila, ganancias) => {
           dispatch(doActionsOnSelection(boton, columna, fila, ganancias,dispatch))
      }
    };
};

const connector = connect(
    mapStateToProps,
    mapDispatchToProps
);
  
export default connector(Celda);