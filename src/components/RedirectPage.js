import LoginPage from '../componentsLogin/LoginPage.js';
import UsuarioFabricaPage from '../componentsSeleccionFabrica/UsuarioFabricas.js';
import App from '../components/App';
import React from 'react';
import {connect} from 'react-redux';

const RedirectPage = ({ usuario }) => {
    if (usuario.username === 'NOT_LOGED') {
      //Si no hay usuario logeado que vaya a la pagina de Login
      return <LoginPage />
    } else if (usuario.idFabricaActual === 0) {
        //Si el usuario esta logueado pero aun no eligio con que fabrica jugar
      return <UsuarioFabricaPage usuario={usuario}/>
    } else {
        //Si el usuario esta logueado y selecciono una fabrica, que vaya al juego
      return (
        <App />
      )
    }
  }
  
  const mapStateToProps = state => {
    return {
        botones: state.botones,
        gameState: state.gameState,
        configFabrica: state.configFabrica,
        usuario:state.usuario
    }
  }
  
  const connector = connect(
    mapStateToProps,
    undefined
  )
  
  export default connector(RedirectPage)
  