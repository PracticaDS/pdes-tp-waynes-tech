import React, { Component } from 'react';
import './InfoBox.css';

export class InfoBox extends Component {

  render() {
    return (
        <div className="Infobox">
            <h3>Detalles</h3>
            <div className="InfoBoxContenido">
              <h2> Ganancias: {"$ "+this.props.gameState.statusInfoBox.ganancias + ",00"}</h2>
                <div>
                  {this.props.gameState.statusInfoBox.detalle}
                </div>
                <div>
                  <div>
                  {(this.props.gameState.statusInfoBox.costo > 0 ? "$ "+this.props.gameState.statusInfoBox.costo + ",00" : '')}                  
                  </div>
                </div>
            </div>
        </div>
    )
  }
}

export default InfoBox;


