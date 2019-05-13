import React from 'react';
import './Maquina.css';
import type {Image} from './Utils';
import type {MaquinaDireccion} from './Maquina';

export type Props = {
    image: Image,
    direccion: MaquinaDireccion
  };


  const getMaquinaStyle = (direccion: MaquinaDireccion): string => {
    switch (direccion) {
      case 'NORTE':
        return 'Maquina up';
      case 'SUR':
        return 'Maquina down';
      case 'ESTE':
        return 'Maquina left';
      case 'OESTE':
        return 'Maquina right';
      default:
        return 'Maquina up';
    }
  };

export const Maquina = ({image, direccion}): Props => (
    <div className={getMaquinaStyle(direccion)}>
        <img src={image} alt="maquina" />
    </div>
);

export default Maquina;