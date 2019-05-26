import './Fabrica.css';
import { Fila } from './Fila';
import type {ConfigFabrica, GameType} from '../types/GameState';
import type { Buttons }     from '../types/ButtonType';
//import type { Celdas }      from '../types/CeldaType';
import React from 'react';

export type Props = {
  configFabrica: ConfigFabrica,
  botones: Buttons,
  gameState: GameType
};

export const Fabrica = ({ configFabrica, botones, gameState }: Props) => (
  <div className="grilla">

      { dibujarGrilla(configFabrica.numeroFilas, configFabrica.numeroColumnas, botones, gameState)}
  
  </div>  
); 

const getBotonSelected = (buttons: Buttons): ButtonType => {
  let boton =  buttons.filter(f => f.press === 'selected');
  return (boton.length === 0 ? undefined : boton[0]);
};

const dibujarGrilla = (numeroFilas: CantFilas, numeroColumnas: CantColumnas, botones: Buttons, gameState: GameType) => {
  
  let botonSeleccionado = getBotonSelected(botones);

  var grilla = [];
  for (var i = 1; i <= numeroFilas; i++) {
    grilla.push(
      <Fila key={i} index={i} columnas={numeroColumnas} boton={botonSeleccionado} celdaStore={gameState.celdas} filas={numeroFilas} />
    );
  }
  return grilla;
};


export default Fabrica;
