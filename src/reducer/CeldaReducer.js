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
      case 'ROTAR':
        return rotarMaquina(state, action.boton, action.idCelda, action.idFila);
      case 'BORRAR':
        return borrarMaquina(state, action.boton, action.idCelda, action.idFila);
      default:
        return state;
    }
};

/* ROTA UNA MAQUINA */
const rotarMaquina = (celdas: Celdas, boton: ButtonType, columna: Id, fila: Id): Celdas => {
  let busquedaCelda =  celdas.filter(c => c.id === columna && c.idFila === fila);
  if(busquedaCelda.length !== 0  &&  boton !== undefined){
      let celdaSelected = busquedaCelda[0];
      let maquina = celdaSelected.maquina;
      if(maquina !== undefined){
        switch (maquina.direccion) {
          case 'NORTE':
            maquina.direccion = 'ESTE';
            break;
          case 'ESTE':
            maquina.direccion = 'SUR';
            break;
          case 'SUR':
            maquina.direccion = 'OESTE';
            break;
          case 'OESTE':
            maquina.direccion = 'NORTE';
            break;
          default:
         
        }
      }
  }
  return celdas;
}

/* PONE UNA MAQUINA */
const ponerMaquina = (celdas: Celdas, boton: ButtonType, columna: Id, fila: Id): Celdas => {

    let busquedaCelda =  celdas.filter(c => c.id === columna && c.idFila === fila);
    if(busquedaCelda.length !== 0  &&  boton !== undefined){
        let celdaSelected = busquedaCelda[0];
        celdaSelected.maquina = {
          image: boton.image,
          direccion: 'SUR'
        } 
    }
    return celdas;
};

/* BORRA UNA MAQUINA */
const borrarMaquina = (celdas: Celdas, boton: ButtonType, columna: Id, fila: Id): Celdas => {

  let busquedaCelda =  celdas.filter(c => c.id === columna && c.idFila === fila);
  if(busquedaCelda.length !== 0  &&  boton !== undefined){
      let celdaSelected = busquedaCelda[0];
      celdaSelected.maquina = undefined
  }
  return celdas;
};


   export default celdas;