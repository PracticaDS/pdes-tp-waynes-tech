import React, { Component } from 'react';
import './App.css';
import { Fabrica } from './Fabrica';
import { ToolBox } from './ToolBox';
import { InfoBox } from './InfoBox';

import boton_borrar from './images/delete.PNG';
import boton_rotar  from './images/rotate.PNG';
import boton_move   from './images/move.PNG';

import boton_crafter     from './images/crafter.PNG';
import boton_start       from './images/starter.PNG';
import boton_furnace     from './images/furnace.PNG';
import boton_seller      from './images/seller.PNG';
import boton_transporter from './images/transporter.PNG';

class App extends Component {
  render() {
    return (
      <div className="Container">
        <h1>Wayne's Tech</h1>
        <div className="App">  
          <ToolBox botones={[
            {image:boton_start,       press:"unselected", id:1},
            {image:boton_seller,      press:"unselected", id:2},
            {image:boton_crafter,     press:"unselected", id:3},
            {image:boton_furnace,     press:"unselected", id:4},
            {image:boton_transporter, press:"unselected", id:5},
            {image:boton_borrar,      press:"unselected", id:6},
            {image:boton_rotar,       press:"unselected", id:7},
            {image:boton_move,        press:"unselected", id:8}
            ]}/>
          <Fabrica className="fabrica" filas="10" columnas="15" />
          <InfoBox />        
        </div>
      </div>
    );
  }
}

export default App;
