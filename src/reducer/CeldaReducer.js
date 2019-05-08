import { Id, Buttons } from '../types/ButtonType';
import type { MaquinaAction } from '../types';
import { mount } from 'enzyme';
import  Celda  from '../components/Celda';
import  Fabrica  from '../components/Fabrica';
import React from 'react';
import ReactDOM from 'react-dom';

const celdas = (state: Celdas = [], action: MaquinaAction): Celdas => {
    if(state.length === 0 ){

      //TODO llenameee de celdas

      //ReactDOM.findDOMNode(<Fabrica/>).getElementsByClassName('celda');
      //</instance-of-outermost-component>const celdas = mount(<Celda className="celda" />)
      //return (boton === [] ? undefined : boton[0]);
      //console.log(celdas);
    }
    switch (action.type) {
      case 'AGREGAR_MAQUINA':
        return state; //armar metodo apra agregar una maquina a una celda
      default:
        return state;
    }
   };
   
   export default celdas;