import React from 'react';

export default class CreateFabricaButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  onInputChange(event) {
    this.setState({...this.state, name: event.target.value})
  }

  

  doLogin() {
    this.props.crearFabrica(this.props.usuario.username, this.state.name, 50000)
  }

  render() {
    return  <div className="crear-fabrica-form">
    <input type="text" onChange={this.onInputChange.bind(this)}></input>
    <button className="crearFabrica" onClick={this.doLogin.bind(this)} disabled={!this.state.name}>Crear</button>
    </div>

  }
}