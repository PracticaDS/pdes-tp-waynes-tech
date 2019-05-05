import type {Buttons} from './ButtonType';

export type CantFilas = number;
export type CantColumnas = number;

export type ConfigFabrica = {
    +numeroFilas: CantFilas,
    +numeroColumnas: CantColumnas
}

export type GameState = {
    +botones: Buttons,
    +configFabrica: ConfigFabrica
};

