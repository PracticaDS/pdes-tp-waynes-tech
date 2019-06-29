import React from 'react';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
  }

  onInputChange(event) {
    this.setState({...this.state, username: event.target.value})
  }

  doLogin() {
    this.props.loginUser(this.state.username)
  }

  render() {
    return <div className="login-form">
      <input type="text" onChange={this.onInputChange.bind(this)}></input>
      <button className="login" onClick={this.doLogin.bind(this)} disabled={!this.state.username}>Login</button>
    </div>
  }
}