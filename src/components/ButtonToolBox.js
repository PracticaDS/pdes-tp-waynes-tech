import type  { Image, Press }  from '../types/ButtonType';
import './ToolBox.css';
import React from 'react'


const getSelectStyle = (press: Press): string => {
  switch (press) {
    case 'selected':
      return 'ButtonToolbox seleccionado';
    case 'unselected':
      return 'ButtonToolbox';
    default:
      return 'ButtonToolbox';
  }
};

export type Props = {
  onClick: () => void,
  press: Press,
  image: Image
};

const ButtonToolBox = ({ onClick, image, press }: Props) => (
  <div className={getSelectStyle(press)} onClick={onClick}>
    <img src={image} alt="tool" />
  </div>
);

export default ButtonToolBox;
