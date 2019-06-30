import React     from 'react';
import {connect} from 'react-redux';
import {login} from '../actions/CallBackend';
import '../components/App.css';
import Fabrica from '../componentsSeleccionFabrica/Fabrica';

export const mapStateToProps = (state: State) => {
  return {
     botones: state.botones,
     gameState: state.gameState,
     configFabrica: state.configFabrica,
     usuario:state.usuario

  }
};

const FabricaConnected = 
connect(mapStateToProps, dispatch => {return {loginUser: (username) => dispatch(login(username))}})(Fabrica)


const dibujarFabricas = (fabricas) => {
    var array = [];
    for (var i=0; i< fabricas.length; i++){
        array.push(
        <FabricaConnected nombre={fabricas[i].nombre} ganancias={fabricas[i].ganancias} 
        id={fabricas[i].id_fabrica}></FabricaConnected>
        )
    }
    return array;
};


const UsuarioFabricaPage = (usuario) => (
  <div>
      {console.log(usuario)}
     <div className="Container">
        <h1>Wayne's Tech</h1>
        <div className="UsuarioFabricaPage">      
            {dibujarFabricas(usuario.fabricas)}
        </div>
      </div>
  </div>
);



export default UsuarioFabricaPage;
