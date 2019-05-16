import type MaquinaType from "../components/Maquina";
import {Id} from './Utils';


export type CeldaType = {
    +id: Id,
    +idFila: Id,
    +maquina: MaquinaType
  };

export type Celdas = Array<CeldaType>;
  

