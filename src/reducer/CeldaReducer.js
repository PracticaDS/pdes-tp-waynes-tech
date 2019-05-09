import { Id, Buttons } from '../types/ButtonType';
import type { MaquinaAction, Image, Celdas } from '../types';
import { mount } from 'enzyme';
import  Celda  from '../components/Celda';
import  Fabrica  from '../components/Fabrica';
import React from 'react';
import ReactDOM from 'react-dom';

const celdas = (state: Celdas = [], action: MaquinaAction): Celdas => {

    switch (action.type) {
      case 'AGREGAR_MAQUINA':
        return ponerMaquina(state, action.boton, action.idCelda, action.idFila);
      default:
        return state;
    }
};
   
  const ponerMaquina = (celdas: Celdas, boton: ButtonType, columna: Id, fila: Id): Celdas => {

    let busquedaCelda =  celdas.filter(c => c.id === columna && c.idFila === fila);
    if(busquedaCelda.length !== 0 ){
        let celdaSelected = busquedaCelda[0];
        celdaSelected.maquina = {
          image: boton.image,
          direccion: 'SUR'
        } 
        //this.props.celdaStore.push({ id:i , idFila: this.props.index});
    }
    return celdas;
  
  };


   export default celdas;