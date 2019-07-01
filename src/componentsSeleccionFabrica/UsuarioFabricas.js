import React     from 'react';
import {connect} from 'react-redux';
import {getFabrica} from '../actions/CallBackend';
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
connect(mapStateToProps, dispatch => {return {recuperarFabrica: (username,idFabrica) => dispatch(getFabrica(username,idFabrica))}})(Fabrica)


const dibujarFabricas = (fabricas, username) => {
    var array = [];
    for (var i=0; i< fabricas.length; i++){
        array.push(
        <FabricaConnected nombre={fabricas[i].nombre} 
        ganancias={fabricas[i].ganancias} 
        id={fabricas[i].id_fabrica} 
        username={username}></FabricaConnected>
        )
    }
    return array;
};


const UsuarioFabricaPage = (usuario) => (
  <div>
      {console.log(usuario.usuario.fabricas)}
     <div className="Container">
        <h1>Wayne's Tech</h1>
        <div className="UsuarioFabricaPage">      
            {dibujarFabricas(usuario.fabricas, usuario.username)}
        </div>
      </div>
  </div>
);



export default UsuarioFabricaPage;
