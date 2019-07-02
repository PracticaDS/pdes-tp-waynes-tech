import './Fabrica.css';
import { Fila } from './Fila';
import type {ConfigFabrica, GameType, Usuario} from '../types/GameState';
import type { Buttons }     from '../types/ButtonType';
import React from 'react';
import TickButton  from '../containers/ContainerTickButton';
import SaveButton  from '../containers/ContainerSaveButton';

export type Props = {
  configFabrica: ConfigFabrica,
  botones: Buttons,
  gameState: GameType,
  usuario: Usuario
};

export const Fabrica = ({ configFabrica, botones, gameState, usuario }: Props) => (
  <div className="grilla">
      { dibujarGrilla(configFabrica.numeroFilas, configFabrica.numeroColumnas, botones, gameState, usuario)}
      <div>
        <TickButton/>
        <SaveButton/>
      </div>
  </div> 
   
); 

const getBotonSelected = (buttons: Buttons): ButtonType => {
  let boton =  buttons.filter(f => f.press === 'selected');
  return (boton.length === 0 ? undefined : boton[0]);
};

const dibujarGrilla = (numeroFilas: CantFilas, numeroColumnas: CantColumnas, botones: Buttons, gameState: GameType, usuario:Usuario) => {
  let botonSeleccionado = getBotonSelected(botones);

  var grilla = [];
  for (var i = 1; i <= numeroFilas; i++) {
    grilla.push(
      <Fila key={i} index={i} usuario={usuario} columnas={numeroColumnas} boton={botonSeleccionado} celdaStore={gameState.celdas} filas={numeroFilas} />
    );
  }
  return grilla;
};


export default Fabrica;
