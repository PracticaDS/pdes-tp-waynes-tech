import React, { Component } from 'react';
import PropTypes            from 'prop-types';

export class ButtonToolBox extends Component {


  render() {
	    if (this.props.seleccionado){
          return <div className="ButtonToolbox seleccionado" >
                    <img src={this.props.src} alt="tool" />
                 </div>;
      }else{
          return <div className="ButtonToolbox" onClick={() => this.props.onSelect(this.props.nombre) } >
                    <img src={this.props.src} alt="tool"/>
                 </div>;	
      }
  }


}


ButtonToolBox.propTypes = {
  seleccionado: PropTypes.bool,
  nombre: PropTypes.string
}