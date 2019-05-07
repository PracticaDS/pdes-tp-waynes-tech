import boton_borrar      from './components/images/delete.PNG';
import boton_rotar       from './components/images/rotate.PNG';
import boton_move        from './components/images/move.PNG';
import boton_crafter     from './components/images/crafter.PNG';
import boton_start       from './components/images/starter.PNG';
import boton_furnace     from './components/images/furnace.PNG';
import boton_seller      from './components/images/seller.PNG';
import boton_transporter from './components/images/transporter.PNG';

export const initialState = {
    botones: [
        {image:boton_start,       press:"unselected", id:1},
        {image:boton_seller,      press:"unselected", id:2},
        {image:boton_crafter,     press:"unselected", id:3},
        {image:boton_furnace,     press:"unselected", id:4},
        {image:boton_transporter, press:"unselected", id:5},
        {image:boton_borrar,      press:"unselected", id:6},
        {image:boton_rotar,       press:"unselected", id:7},
        {image:boton_move,        press:"unselected", id:8}
    ],
    configFabrica: {
       numeroFilas: 10,
       numeroColumnas: 8
    },
    celdas: []
  };
  