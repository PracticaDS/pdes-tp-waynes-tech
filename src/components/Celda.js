import React from 'react';
import './Celda.css';
import type {MaquinaType} from '../types/Maquina';
import Maquina from './Maquina';

export const Celda = ({maquina}: Props) => (
    <div className="celda">
        { maquina === undefined ? '' : <Maquina image={maquina.image}/> }
    </div>   
);


export type Props = {
    maquina: MaquinaType
}