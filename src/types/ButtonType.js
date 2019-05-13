import type {Id, Image} from './Utils';

export type Press  = 'selected' | 'unselected';
export type Action = 'put' | 'rotate' | 'delete' | 'move';

export type ButtonType = {
    +id: Id,
    +image: Image,
    +press: Press,
    +action: Action
  };

export type Buttons = Array<ButtonType>;
  
export type ButtonAction =
| { type: 'SELECT', +id: Id };



