import React     from 'react';
import LoginForm from '../componentsLogin/LoginForm';
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


const UsuarioFabricaPage = () => (

  <div>
     <div className="Container">
        <h1>Wayne's Tech fabricas</h1>
        <div className="UsuarioFabricaPage">      
            <LoginFormConnected />
        </div>
      </div>
  </div>
);

export default UsuarioFabricaPage;
