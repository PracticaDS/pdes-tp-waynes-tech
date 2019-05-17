import React, { Component } from 'react';
import './InfoBox.css';

export class InfoBox extends Component {
  
  render() {
    return (
        <div className="Infobox">
            <h3>Detalles</h3>
            <div className="InfoBoxContenido">
              <h2> Ganancias: {this.props.statusInfoBox.ganancias}</h2>
                <div>
                  {this.props.statusInfoBox.detalle}
                </div>
                <div>
                  <div>
                  {(this.props.statusInfoBox.costo > 0 ? this.props.statusInfoBox.costo : '')}                  
                  </div>
                </div>
            </div>
        </div>
    )
  }
}

export default InfoBox;


