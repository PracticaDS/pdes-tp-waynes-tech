import React from 'react';
import './Celda.css';
import type {BotonType} from '../types/BotonType';
import Maquina from './Maquina';


export type Props = {
    onClick: () => void
}

export const Celda = ({ onClick}: Props) => (
    <div className="celda" onClick={onClick} >
        
    </div>   
);


export default Celda;