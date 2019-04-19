import React, { Component } from 'react';


export class ButtonToolBox extends Component {
  
  render() {
    return (
        <div className="ButtonToolbox">

          <img src={this.props.src} />
            
        </div>
    )
  }
}