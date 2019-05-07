import React from 'react';
import './Celda.css';
import type {BotonType} from '../types/BotonType';
import Maquina from './Maquina';


export type Props = {
    onClick: () => void
}

export const Celda = ({ onClick, fila, columna}: Props) => (
    <div className="celda" onClick={() => onClick(this, fila, columna)} >
        
    </div>   
);


export default Celda;