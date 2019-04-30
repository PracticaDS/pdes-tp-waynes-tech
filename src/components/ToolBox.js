
import { ButtonToolBox }    from './ButtonToolBox';
import type { Buttons, Id } from '../types/ButtonType';
import './ToolBox.css';
import React from 'react'

export type Props = {
  botones: Buttons,
  onButtonToolClick: (id: Id) => void
};


export const ToolBox = ({ botones, onButtonToolClick }: Props) => (
  <div className="ToolBox">
    <h3>Máquinas</h3>
     <table>
       <tbody>
         <tr>
           <td>
            <ButtonToolBox onClick={() => onButtonToolClick(botones[0].id)}
                           image={botones[0].image} 
                           press={botones[0].press} />
           </td>
           <td>
           <ButtonToolBox onClick={() => onButtonToolClick(botones[1].id)}
                           image={botones[1].image} 
                           press={botones[1].press} />
           </td>
         </tr>
         <tr>
           <td>
            <ButtonToolBox onClick={() => onButtonToolClick(botones[2].id)}
                           image={botones[2].image} 
                           press={botones[2].press} />
           </td>
           <td>
           <ButtonToolBox onClick={() => onButtonToolClick(botones[3].id)}
                           image={botones[3].image} 
                           press={botones[3].press} />
           </td>
         </tr>
         <tr>
           <td>
            <ButtonToolBox onClick={() => onButtonToolClick(botones[4].id)}
                           image={botones[4].image} 
                           press={botones[4].press} />
           </td>
         </tr>
       </tbody>
     </table>
    <h3>Edición</h3>
     <table>
       <tbody>
         <tr>
           <td>
            <ButtonToolBox onClick={() => onButtonToolClick(botones[5].id)}
                           image={botones[5].image} 
                           press={botones[5].press} />
           </td>
           <td>
           <ButtonToolBox onClick={() => onButtonToolClick(botones[6].id)}
                           image={botones[6].image} 
                           press={botones[6].press} />
           </td>
         </tr>
         <tr>
           <td>
            <ButtonToolBox onClick={() => onButtonToolClick(botones[7].id)}
                           image={botones[7].image} 
                           press={botones[7].press} />
           </td>
         </tr>
       </tbody>
     </table>
  </div>
);


export default ToolBox;

/*
import React, { Component } from 'react';

export class ToolBox extends Component {


  constructor(props) {
    super(props);
    this.state = { toolSeleccionado: "" };
  }

  handleSelect = (tool) => {
    this.setState({ toolSeleccionado: tool });
  }

  crearBoton(props){
    return <ButtonToolBox 
              seleccionado={props.nombre === this.state.toolSeleccionado}
              onSelect={this.handleSelect}
              nombre={props.nombre} 
              src={props.src} 
            /> 
  }

  render() {
    return (
      <div className="ToolBox">
              <h3>Máquinas</h3>
                <table>
                  <tbody>
                    <tr>
                      <td>{this.crearBoton({nombre: "starter", src: boton_start })}</td>
                      <td>{this.crearBoton({nombre: "crafter", src: boton_crafter })}</td>
                    </tr>
                    <tr>
                      <td>{this.crearBoton({nombre: "seller", src: boton_seller })}</td>
                      <td>{this.crearBoton({nombre: "furnace", src: boton_furnace })}</td>
                    </tr>
                    <tr>
                      <td>{this.crearBoton({nombre: "transporter", src: boton_transporter })}</td>
                    </tr>
                  </tbody>
                </table>

                <h3>Edición</h3>
                <table>
                  <tbody>
                    <tr>
                      <td>{this.crearBoton({nombre: "delete", src: boton_borrar })}</td>
                      <td>{this.crearBoton({nombre: "move",   src: boton_move })}</td>
                    </tr>
                    <tr>
                      <td>{this.crearBoton({nombre: "rotate",   src: boton_rotar })}</td>
                    </tr>
                  </tbody>
                </table>
      </div>
    )
  }
}
*/