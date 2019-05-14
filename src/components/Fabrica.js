//import React, { Component } from 'react';
import './Fabrica.css';
//import { PropTypes } from 'prop-types';
import { Fila } from './Fila';
import type {ConfigFabrica} from '../types/GameState';
import type { Buttons }     from '../types/ButtonType';
import type { Celdas }     from '../types/CeldaType';
import React from 'react';

export type Props = {
  configFabrica: ConfigFabrica,
  botones: Buttons,
  celdas: Celdas
};

export const Fabrica = ({ configFabrica, botones, celdas }: Props) => (
  <div className="grilla">

      { dibujarGrilla(configFabrica.numeroFilas, configFabrica.numeroColumnas, botones, celdas)}
  
  </div>  
); 

const dibujarGrilla = (numeroFilas: CantFilas, numeroColumnas: CantColumnas, botones: Buttons, celdas: Celdas) => {
  
  let botonSeleccionado = getBotonSelected(botones);

  var grilla = [];
  for (var i = 1; i <= numeroFilas; i++) {
    grilla.push(
      <Fila key={i} index={i} columnas={numeroColumnas} boton={botonSeleccionado} celdaStore={celdas} filas={numeroFilas} />
    );
  }
  return grilla;
};

const getBotonSelected = (buttons: Buttons): ButtonType => {
  let boton =  buttons.filter(f => f.press === 'selected');
  return (boton.length === 0 ? undefined : boton[0]);
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