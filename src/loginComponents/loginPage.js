import React     from 'react';
import LoginForm from './LoginForm';
import {connect} from 'react-redux';
import {loginUsuario} from '../actions/CallBackend';

const LoginFormConnected = 
connect(undefined, dispatch => {return {loginUser: (username) => dispatch(loginUsuario(username))}})(LoginForm)



const LoginPage = () => (

  <div>
     <div className="Container">
        <h1>Wayne's Tech</h1>
        <div className="LoginPage">      
            <LoginFormConnected />
        </div>
      </div>
  </div>
);

export default LoginPage;