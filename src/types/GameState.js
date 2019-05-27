import type {Buttons} from './ButtonType';
import type {Celdas} from './CeldaType';

export type CantFilas = number;
export type CantColumnas = number;
export type Ganancias = number;

export type ConfigFabrica = {
    +numeroFilas: CantFilas,
    +numeroColumnas: CantColumnas
}

export type DetalleMaquina = string;
export type CostoMaquina = number;

export type StatusInfoBox = {
    +detalle: DetalleMaquina,
    +costo: CostoMaquina,
    +ganancias: Ganancias
}

export type GameType = {
    +statusInfoBox: StatusInfoBox,
    +celdas: Celdas
}

export type GameState = {
    +botones: Buttons,
    +configFabrica: ConfigFabrica,
    +gameState: GameType
};