import { Id } from '../types/ButtonType';
import type { MaquinaAction, Celdas } from '../types';
import type { GameType, StatusInfoBox } from '../types/GameState';


const gameState = (state: GameType = [], action: MaquinaAction): GameType => {
   
    switch (action.type) {
      case 'AGREGAR_MAQUINA':
        return newState(ponerMaquina(state.celdas, action.boton, action.idCelda, action.idFila, state.statusInfoBox)
                        , state.statusInfoBox);
      case 'ROTAR':
        return newState(rotarMaquina(state.celdas, action.boton, action.idCelda, action.idFila), state.statusInfoBox);
      case 'BORRAR':
        return newState(borrarMaquina(state.celdas, action.boton, action.idCelda, action.idFila), state.statusInfoBox);
      case 'MOVER':
        return newState(moverMaquina(state.celdas, action.boton, action.idCelda, action.idFila), state.statusInfoBox);
      case 'TICK':
        return newState(tickMaquinas(state.celdas, state.statusInfoBox), state.statusInfoBox);
      case 'GET_FABRICA_OK':
        return newState(convertCeldas(action.fabrica.celdas), {detalle: '',costo: 0, ganancias: action.fabrica.ganancias});
      default:
        return state;
    }
};

const newState = (celdas: Celdas, infoBox: StatusInfoBox): GameType => {
  return {
            celdas: celdas,
            statusInfoBox: infoBox
  }
}

/* convierne las celdas al formato que el backend espera */
const convertCeldas = (celdas) => {
  const response = [];
  for (var i=0; i< celdas.length; i++){
      response.push({ idFila: celdas[i].idFila, id: celdas[i].id , maquina: celdas[i].maquina } );
  };
  return response;
}

/* ****************************************TICK DE MAQUINAS*************************************************** */

const getNextCelda = (celda: Celda, celdas: Celdas): Celda => {

        var x = celda.id;
        var y = celda.idFila;
        if(celda.maquina !== undefined){
          switch (celda.maquina.direccion) {
            case 'SUR':
              x = x + 1;
              break; 
            case 'NORTE':
              x = x - 1;
              break;
            case 'OESTE':
              y = y - 1;
              break;
            default:
              y = y + 1;
              break;
          }
          return celdas.filter( c => c.id === x  && c.idFila === y )[0];
        }else{
          return celda;
        }
   
}

const transportar = (c: Celda, celdas: Celdas) => {
          //Busca a la siguiente celda para ver si se los puede pasar
          const nextCelda = getNextCelda(c, celdas);
          //Si la siguiente celda tiene maquina, se los pasa
          if(nextCelda !== undefined && nextCelda.maquina !== undefined){
            console.log("maquina "+c.id+" "+c.idFila+" paso "+c.maquina.materiales+ 
            " a maquina "+nextCelda.id+" "+nextCelda.idFila);
            nextCelda.maquina.materiales = nextCelda.maquina.materiales + c.maquina.materiales;
          }
          //tenga proxima maquina o no, bota los materiales (se les caen :P) 
          c.maquina.materiales = 0;
}

const moverMaterial = (c: Celda, celdas: Celdas, infoBox: StatusInfoBox): Celda => {

    if(c.maquina.image.includes('starter')){
        /* ********************************* STARTER ***********************************/
        //Si la maquina es un starter, ve si tiene materiales
        if(c.maquina.materiales > 0){
            console.log("starter "+c.id+" "+c.idFila+" tiene "+c.maquina.materiales);
            transportar(c, celdas);
            console.log("starter "+c.id+" "+c.idFila+" tiene "+c.maquina.materiales);
        }else{
          //Si no tiene uno, lo crea y lo retiene
          c.maquina.materiales = c.maquina.materiales + 1;
        }
        /* ********************************* STARTER ***********************************/
    }else{
      /* ********************************* TRANSPORTER **********************************/
      if(c.maquina.image.includes('transporter')){
        //Si la maquina tiene materiales, los trata de pasar a la siguiente celda
        //Si no tiene, nada hace!
        if(c.maquina.materiales > 0){
          console.log("trans "+c.id+" "+c.idFila+" tiene "+c.maquina.materiales);
          transportar(c, celdas);
          console.log("trans "+c.id+" "+c.idFila+" tiene "+c.maquina.materiales);
        }
        /* ********************************* TRANSPORTER **********************************/
      }else{
        if(c.maquina.image.includes('seller')){
          if(c.maquina.materiales > 0){
             console.log("seller "+c.id+" "+c.idFila+" tiene "+c.maquina.materiales);
             infoBox.ganancias = infoBox.ganancias + (c.maquina.materiales * 10);
             c.maquina.materiales = 0;
             console.log("seller "+c.id+" "+c.idFila+" tiene "+c.maquina.materiales);
          }
        }
      }
      
    }
    return c;
}

/* TICKEAR UNA MAQUINA */
const tickMaquinas = (celdas: Celdas, infoBox: StatusInfoBox): Celdas => {
   
    const celdasNuevas = [];
    for (var i = 0; i <= celdas.length - 1 ; i++) {
 
      if(celdas[i].maquina !== undefined){
        celdasNuevas.push(moverMaterial(celdas[i], celdas, infoBox));
      }else{
        celdasNuevas.push(celdas[i]);
      }
    }
    return celdasNuevas;

}

/* ****************************************ACCIONES DE CELDAS*************************************************** */

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
                     mover: false,
                     materiales:celdaConMaquina.maquina.materiales }
  }
  return celda;
}

/* MOVER UNA MAQUINA */
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
            image: celdaConMaquina.maquina.image,
            materiales: celdaConMaquina.maquina.materiales
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
const ponerMaquina = (celdas: Celdas, boton: ButtonType, columna: Id, fila: Id, infoBox: StatusInfoBox): Celdas => {
    if(infoBox.ganancias >= boton.price){
      infoBox.ganancias = infoBox.ganancias - boton.price;
      return celdas.map(c => ( c.id === columna && c.idFila === fila ? 
      { ...c, maquina: { image: boton.image, direccion: 'SUR', mover: false, materiales:0 }} : c ));
    }else{
      return celdas;
    }
};

/* BORRA UNA MAQUINA */
const borrarMaquina = (celdas: Celdas, boton: ButtonType, columna: Id, fila: Id): Celdas => {
  return celdas.map(c => ( c.id === columna && c.idFila === fila ? 
    { ...c, maquina: undefined } : c ));
};


   export default gameState;