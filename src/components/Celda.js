import React from 'react';
import './Celda.css';
import type {ButtonType} from '../types/ButtonType';
import type {Celdas} from '../types/CeldaType';
import type {GameType} from '../types/GameState';
import type {Id} from '../types/Utils';
import type {MaquinaType} from '../types/Maquina';
import Maquina from './Maquina';


export type Props = {
    onClick: () => void,
    boton: ButtonType,
    fila: Id,
    id: Id,
    maquina: MaquinaType,
    gameState: GameType
}

export const Celda = ({ onClickCelda, boton, id, fila, gameState}: Props) => (
    
    <div className="celda" onClick={() => onClickCelda(boton, id, fila)} >
        { dibujarMaquina(gameState.celdas, id, fila) }                             
    </div>    
);

const dibujarMaquina = (celdas: Celdas, columna: Id, fila: Id ) =>  {

    let celdaActual =  celdas.filter(c => c.id === columna && c.idFila === fila);
    if(celdaActual.length !== 0 && celdaActual[0].maquina !== undefined ){

        return <Maquina image={celdaActual[0].maquina.image} 
                direccion={celdaActual[0].maquina.direccion}
                mover={celdaActual[0].maquina.mover}>
               </Maquina>

    }else{
        return  <div>{celdaActual[0].id + " " + celdaActual[0].idFila}</div>
    }
}




export default Celda;