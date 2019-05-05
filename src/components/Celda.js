import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import './Celda.css';
import Maquina from '../types/Maquina'

export const Celda = ({maquina}: Props) => (
    <div className="celda">
        {maquina === null ? '' : maquina}
    </div>   
);


export type Props = {
    maquina: Maquina
}