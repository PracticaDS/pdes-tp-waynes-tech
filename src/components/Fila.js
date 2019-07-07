import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import  Celda  from '../containers/ContainerCelda';


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

    getFabricaActual(fabricas, idFabrica) {

        const fabricaActualArray = fabricas.filter( f => f.id_fabrica === idFabrica);
        return fabricaActualArray[0];
    }

    dibujarCeldas(){
        var celdas = [];
        for (var i=1; i<= this.props.columnas; i++){
           /*
            if(this.props.usuario.fabricas.length <= 0){
                 console.log("No habia fabricas en la BDD");
                 //Inserta las celdas en el estate inicial de una nueva fabrica
                if(this.props.celdaStore.length < (this.props.columnas * this.props.filas)){
                    this.props.celdaStore.push({ id:i , idFila: this.props.index});
                }
            }else{
                //Se trae las celdas del back
                //Si hay celdas en el back, y aun no se lleno el store de celdas, se llena con los datos del back
                console.log("Habia datos para restaurar");
                const fabricaActual = this.getFabricaActual(this.props.usuario.fabricas, this.props.usuario.idFabricaActual);
                if( fabricaActual.celdas.length > 0 &&
                    this.props.celdaStore.length <= 0) {
                    console.log("Carga las celdas de BDD");
                    const celdasBack = fabricaActual.celdas;
                    for (var i=0; i< celdasBack.length; i++){
                        this.props.celdaStore.push({ id: celdasBack[i].idColumna , idFila: celdasBack[i].idFila,
                           maquina: celdasBack[i].maquina
                        });
                    } 
                }
            }*/

            //Inserta las celdas en el estate inicial de una nueva fabrica
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