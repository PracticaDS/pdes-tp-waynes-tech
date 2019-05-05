//import React, { Component } from 'react';
import './Fabrica.css';
//import { PropTypes } from 'prop-types';
import { Fila } from './Fila';
import type {ConfigFabrica} from '../types/GameState';
import React from 'react';

export type Props = {
  configFabrica: ConfigFabrica
  
};

export const Fabrica = ({ configFabrica }: Props) => (
  <div className="fabrica">

      { dibujarGrilla(configFabrica.numeroFilas, configFabrica.numeroColumnas)}
  
  </div>  
); 

const dibujarGrilla = (numeroFilas: CantFilas, numeroColumnas: CantColumnas) => {
  var grilla = [];
  for (var i = 1; i <= numeroFilas; i++) {
    grilla.push(
      <Fila key={i} index={i} columnas={numeroColumnas} />
    );
  }
  return grilla;
};


export default Fabrica;

/*
export class Fabrica extends Component {
  
  
  constructor(props) {
    super(props);
    this.state = {
      grillas: []
    }
  }

  render() {
    return (
        <div className="grilla">
            {this.dibujarGrilla()}
        </div>
    )
  }
  
  dibujarGrilla(){
    var grilla = [];
    for (var i = 1; i <= this.props.filas; i++) {
      grilla.push(
        <Fila index= {i} columnas= {this.props.columnas} />
      );
    }
    this.grillas = grilla;
    return grilla;
  }

}

Fabrica.propTypes = {
  filas : PropTypes.number,
  columnas: PropTypes.number
}

Fabrica.defaultProps = { 
  filas : 6,
  columnas: 8
}

*/