import React from 'react';
import './Maquina.css';
import type {Image} from './Utils';
import type {MaquinaDireccion} from './Maquina';

export type Props = {
    image: Image,
    direccion: MaquinaDireccion
  };

export const Maquina = ({image}): Props => (
    <div>
        <img src={image} alt="maquina" />
    </div>
);

export default Maquina;