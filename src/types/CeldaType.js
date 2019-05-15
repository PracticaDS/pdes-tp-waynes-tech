import type import MaquinaType from "../components/Maquina";
import {Id, Image} from './Utils';


export type CeldaType = {
    +id: Id,
    +idFila: Id,
    +maquina: MaquinaType
  };

export type Celdas = Array<CeldaType>;
  

