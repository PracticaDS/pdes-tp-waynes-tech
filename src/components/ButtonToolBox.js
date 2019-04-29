import type  { Image, Press }  from '../types/ficha';
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

export const ButtonToolBox = ({ onClick, image, press }: Props) => (
  <div className={getSelectStyle(press)} onClick={onClick}>
    <img src={image} alt="tool" />
  </div>
);

export default ButtonToolBox;

/*
import React, { Component } from 'react';
import PropTypes            from 'prop-types';

export class ButtonToolBox extends Component {


  render() {
	    if (this.props.seleccionado){
          return <div className="ButtonToolbox seleccionado" >
                    <img src={this.props.src} alt="tool" />
                 </div>;
      }else{
          return <div className="ButtonToolbox" onClick={() => this.props.onSelect(this.props.nombre) } >
                    <img src={this.props.src} alt="tool"/>
                 </div>;	
      }
  }
}


ButtonToolBox.propTypes = {
  seleccionado: PropTypes.bool,
  nombre: PropTypes.string
}
*/