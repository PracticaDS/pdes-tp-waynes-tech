import { Id, Buttons } from '../types/ButtonType';
import type { MaquinaAction, Image, Celdas } from '../types';


const celdas = (state: Celdas = [], action: MaquinaAction): Celdas => {
    switch (action.type) {
      case 'AGREGAR_MAQUINA':
        return ponerMaquina(state, action.boton, action.idCelda, action.idFila);
      case 'ROTAR':
        return rotarMaquina(state, action.boton, action.idCelda, action.idFila);
      case 'BORRAR':
        return borrarMaquina(state, action.boton, action.idCelda, action.idFila);
      case 'MOVER':
        return moverMaquina(state, action.boton, action.idCelda, action.idFila);
      default:
        return state;
    }
};

const getCeldaActual = (celdas: Celdas, columna: Id, fila: Id): Celda => {
  let celdaActualArray =  celdas.filter(c => c.id === columna && c.idFila === fila);
  if(celdaActualArray.length !== 0){
    return celdaActualArray[0];
  }else{
    return undefined;
  }
}

const miraSiSacaMaquina = (celdaConMaquina: Celda, celdaActual: Celda): Celda => {
  if(celdaConMaquina.id === celdaActual.id && celdaConMaquina.idFila === celdaActual.idFila && celdaActual.maquina.mover){
    celdaActual.maquina = undefined;
  }
  return celdaActual;
}

const miraSiPoneMaquina = (celda: Celda, columna: Id, fila: Id, celdaConMaquina: Celda): Celda => {
  if(celda.id === columna && celda.idFila === fila && celdaConMaquina !== undefined){
    celda.maquina = {direccion: celdaConMaquina.maquina.direccion, 
                     image: celdaConMaquina.maquina.image, 
                     mover: false}
  }
  return celda;
}

const moverMaquina = (celdas: Celdas, boton: ButtonType, columna: Id, fila: Id): Celdas => {
    const celdaActual = getCeldaActual(celdas,columna, fila);
    if(celdaActual.maquina !== undefined ){
       celdaActual.maquina.mover = true;
       return celdas.map(c => ( c.id === columna && c.idFila === fila ? 
       celdaActual : c ));
    }else{
       
       let busquedaCeldaConMaquinaAMover =  celdas.filter(c => c.maquina !== undefined && c.maquina.mover);
       let celdaConMaquina = busquedaCeldaConMaquinaAMover[busquedaCeldaConMaquinaAMover.length - 1];
       if(celdaConMaquina !== undefined){
        const celdaCopia = {
          id: celdaConMaquina.id,
          idFila: celdaConMaquina.idFila,
          maquina: {
            direccion: celdaConMaquina.maquina.direccion,
            image: celdaConMaquina.maquina.image
          }
        } 
        return celdas.map(c => ( c.maquina === undefined ? 
        miraSiPoneMaquina(c, columna, fila,celdaCopia ) : 
        miraSiSacaMaquina(celdaConMaquina, c)));
       }
       return celdas;
    }
};


/* ROTA UNA MAQUINA */
const rotarMaquina = (celdas: Celdas, boton: ButtonType, columna: Id, fila: Id): Celdas => {
  return celdas.map(c => ( c.id === columna && c.idFila === fila && c.maquina !== undefined ? 
    { ...c, maquina: cambiarPosicionMaquina(c.maquina) } : c ));
}

const cambiarPosicionMaquina = (maquina: MaquinaType): MaquinaType =>{
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
  return maquina;
}

/* PONE UNA MAQUINA */
const ponerMaquina = (celdas: Celdas, boton: ButtonType, columna: Id, fila: Id): Celdas => {
    return celdas.map(c => ( c.id === columna && c.idFila === fila ? 
    { ...c, maquina: { image: boton.image, direccion: 'SUR', mover: false }} : c ));
};

/* BORRA UNA MAQUINA */
const borrarMaquina = (celdas: Celdas, boton: ButtonType, columna: Id, fila: Id): Celdas => {
  return celdas.map(c => ( c.id === columna && c.idFila === fila ? 
    { ...c, maquina: undefined } : c ));
};


   export default celdas;