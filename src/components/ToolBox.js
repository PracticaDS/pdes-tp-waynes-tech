import React, { Component } from 'react';
import { ButtonToolBox }    from './ButtonToolBox';
import './ToolBox.css';

import boton_borrar from './images/delete.PNG';
import boton_rotar  from './images/rotate.PNG';
import boton_move   from './images/move.PNG';

import boton_crafter from './images/crafter.PNG';
import boton_start   from './images/starter.PNG';
import boton_furnace from './images/furnace.PNG';
import boton_seller  from './images/seller.PNG';
import boton_transporter from './images/transporter.PNG';

export class ToolBox extends Component {
  
  render() {
    return (
      <div className="ToolBox">
        <h3>Máquinas</h3>
        <table>
          <tr>
            <td><ButtonToolBox src={boton_start} /></td>
            <td><ButtonToolBox src={boton_seller} /></td>
          </tr>
          <tr>
            <td><ButtonToolBox src={boton_crafter} /></td>
            <td><ButtonToolBox src={boton_furnace} /></td>
          </tr>
          <tr>
            <td><ButtonToolBox src={boton_transporter} /></td>
          </tr>
        </table>

        <h3>Edición</h3>
        <table>
          <tr>
            <td><ButtonToolBox src={boton_borrar} /></td>
            <td><ButtonToolBox src={boton_move} /></td>
          </tr>
          <tr>
            <td><ButtonToolBox src={boton_rotar} /></td>
          </tr>
        </table>

      </div>
    )
  }
}