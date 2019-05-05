export type Id = number;
export type Image = string;
export type Press = 'selected' | 'unselected';


export type ButtonType = {
    +id: Id,
    +image: Image,
    +press: Press
  };

export type Buttons = Array<ButtonType>;

  
export type ButtonAction =
| { type: 'SELECT', +id: Id };



