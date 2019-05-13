import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
//import { Celda } from './Celda';
import  Celda  from '../containers/ContainerCelda';
import type { ButtonType } from '../types/ButtonType';

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

           let maquina = undefined;
           /* Se setean las celdas en el estore */
           let celdaActual =  this.props.celdaStore.filter(c => c.id === i && c.idFila === this.props.index);
            /* Si la celda no existe, se agrega al store */
           if(celdaActual.length === 0 ){
                this.props.celdaStore.push({ id:i , idFila: this.props.index});
           }else{
               /* Si la celda existe, se obtiene si tiene una maquina */
               maquina = celdaActual[0].maquina;
           }

           celdas.push(
                <Celda key={i}
                       id={i} 
                       boton={this.props.boton}  
                       fila={this.props.index} 
                       columna={i} 
                       maquina={maquina}/>
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