type Id = number; 
type Image = String;

export type Maquina = {
    +id: Id,
    +iamge: Image
}

export type MaquinaAction = 
| { type: 'AGREGAR_MAQUINA' }