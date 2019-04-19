import React, { Component } from 'react';
import './Fabrica.css';
import { PropTypes } from 'prop-types';

export class Fabrica extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      columnas: Array,
    };
  }


  render() {
    return (
        <div className="Grilla">
            <h2>Tablero de la fabrica </h2>
        </div>
    )
  }
  
}

Fabrica.propTypes = {
  contenidos: PropTypes.array,
  filas: PropTypes.number
}

Fabrica.defaultProps = {
  filas:6  
}