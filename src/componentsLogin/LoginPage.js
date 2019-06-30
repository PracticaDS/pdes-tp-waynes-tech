import React     from 'react';
import LoginForm from './LoginForm';
import {connect} from 'react-redux';
import {login} from '../actions/CallBackend';
import '../components/App.css';

export const mapStateToProps = (state: State) => {
  return {
     botones: state.botones,
     gameState: state.gameState,
     configFabrica: state.configFabrica,
     usuario:state.usuario

  }
};

const LoginFormConnected = 
connect(mapStateToProps, dispatch => {return {loginUser: (username) => dispatch(login(username))}})(LoginForm)


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