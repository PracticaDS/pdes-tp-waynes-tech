import type {Buttons} from './ButtonType';
import type {Celdas} from './CeldaType';

export type CantFilas = number;
export type CantColumnas = number;

export type ConfigFabrica = {
    +numeroFilas: CantFilas,
    +numeroColumnas: CantColumnas
}

export type DetalleMaquina = string;
export type CostoMaquina = number;

export type StatusInfoBox = {
    +detalle: DetalleMaquina,
    +costo: CostoMaquina
}

export type GameState = {
    +botones: Buttons,
    +configFabrica: ConfigFabrica,
    +celdas: Celdas,
    +statusInfoBox: StatusInfoBox,
    +ganancias: 5000
};