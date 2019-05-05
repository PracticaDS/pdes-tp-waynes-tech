import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import './Maquina.css';
import type {Maquina} from '../types/Maquina'

export const Maquina = () => (
    <div>
        <img src={maquina.image} alt="maquina" />
    </div>
);

export type Props = {
    maquina : Maquina,
}