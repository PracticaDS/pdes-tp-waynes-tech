import type import MaquinaType from "../components/Maquina";
 {Id, Image} from './Utils';


export type CeldaType = {
    +id: Id,
    +idFila: Id,
    +maquina: MaquinaType
  };

export type Celdas = Array<CeldaType>;
  

