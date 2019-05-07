import type {Buttons, ButtonType} from './ButtonType';
import type {Celdas} from './CeldaType';

export type CantFilas = number;
export type CantColumnas = number;

export type ConfigFabrica = {
    +numeroFilas: CantFilas,
    +numeroColumnas: CantColumnas
}

export type GameState = {
    +botones: Buttons,
    +configFabrica: ConfigFabrica,
    +celdas: Celdas
    
};

