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
        {image:boton_start,       press:"unselected", id:1, action:"AGREGAR_MAQUINA", name:"Starter",  price:600 },
        {image:boton_seller,      press:"unselected", id:2, action:"AGREGAR_MAQUINA", name:"Seller" ,  price:350 },
        {image:boton_crafter,     press:"unselected", id:3, action:"AGREGAR_MAQUINA", name:"Crafter",  price:450 },
        {image:boton_furnace,     press:"unselected", id:4, action:"AGREGAR_MAQUINA", name:"Furnace",  price:300},
        {image:boton_transporter, press:"unselected", id:5, action:"AGREGAR_MAQUINA", name:"Transporter", price:100},
        {image:boton_borrar,      press:"unselected", id:6, action:"BORRAR", name:"", price:0},
        {image:boton_rotar,       press:"unselected", id:7, action:"ROTAR",  name:"", price:0},
        {image:boton_move,        press:"unselected", id:8, action:"MOVER",  name:"", price:0}
    ],
    configFabrica: {
       numeroFilas: 10,
       numeroColumnas: 8
    },
    gameState: {
        celdas: [],
        statusInfoBox: {
            detalle: '',
            costo: 0,
            ganancias: 5000
        }
    },
    usuario:{
        username:'NOT_LOGED',
        fabricas:[],
        idFabricaActual:0
    }
  };
  