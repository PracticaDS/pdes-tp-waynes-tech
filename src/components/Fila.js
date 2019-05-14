import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
//import { Celda } from './Celda';
import  Celda  from '../containers/ContainerCelda';
//import type { ButtonType } from '../types/ButtonType';

import './Fila.css';

export class Fila extends Component {

    constructor(props){
        super (props);
        this.state = {
           celdas: []
        }
    }

    render () {
        return (
        <div className="fila">
           { this.dibujarCeldas() }
        </div>   
        )
    }  

    dibujarCeldas(){
        var celdas = [];
        for (var i=1; i<= this.props.columnas; i++){

           if(this.props.celdaStore.length < (this.props.columnas * this.props.filas)){
              this.props.celdaStore.push({ id:i , idFila: this.props.index});
           }

           celdas.push(
                <Celda key={i}
                       id={i} 
                       boton={this.props.boton}  
                       fila={this.props.index} 
                       columna={i} />
            )
        }
        this.celdas= celdas;
        return celdas;
    }

}

Fila.propTypes = {
    index : PropTypes.number,
    columnas: PropTypes.number
}