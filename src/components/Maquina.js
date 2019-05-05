import React from 'react';
import './Maquina.css';
import type {Image} from './Utils';

export type Props = {
    image: Image
  };

export const Maquina = ({image}): Props => (
    <div>
        <img src={image} alt="maquina" />
    </div>
);

export default Maquina;