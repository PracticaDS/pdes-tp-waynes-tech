import React from 'react';
import './Celda.css';
import type {BotonType} from '../types/BotonType';
import type {Image, Id} from '../types/Utils';
import type {MaquinaType} from '../types/Maquina';
import Maquina from './Maquina';


export type Props = {
    onClick: () => void,
    boton: ButtonType,
    fila: Id,
    id: Id,
    maquina: MaquinaType
}

export const Celda = ({ onClickCelda, boton, id, fila, maquina}: Props) => (
    <div className="celda" onClick={() => onClickCelda(boton, id, fila)} >
        { maquina !== null ? <Maquina image={maquina.image} direccion={maquina.direccion}></Maquina> : '' }
    </div>    
);

/*
    if(maquina !== null){
        <div className="celda" onClick={() => onClickCelda(boton, id, fila)} >
            <Maquina image={maquina.image} direccion={maquina.direccion}></Maquina>
        </div>
    }else{
       <div className="celda" onClick={() => onClickCelda(boton, id, fila)} />
    }
*/


export default Celda;