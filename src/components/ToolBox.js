
import { ButtonToolBox }    from './ButtonToolBox';
import type { Buttons, Id } from '../types/ButtonType';
import './ToolBox.css';
import type {onButtonToolClick} from '../containers/ContainerToolBox';
import React from 'react'

export type Props = {
  botones: Buttons,
  onButtonToolClick: (id: Id) => void
};

export const ToolBox = ({ botones, onButtonToolClick }: Props) => (
  <div className="ToolBox">
    {
      botones.map(boton => (
        <ButtonToolBox key={boton.id} {...boton} onClick={() => onButtonToolClick(boton.id)} />
      ))}
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