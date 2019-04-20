import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { Celda } from './Celda';

export class Fila extends Component {

    constructor(props){
        super (props);
        this.state = {
           
        }
    }

    render () {
        return (
        <div className="fila">
           "una fila "
        </div>   
        )
    }  

}

Fila.propTypes = {
    index : PropTypes.number,
    columnas: PropTypes.number
}