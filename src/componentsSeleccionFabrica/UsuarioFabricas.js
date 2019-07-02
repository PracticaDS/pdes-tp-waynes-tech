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
connect(mapStateToProps, dispatch => {return {recuperarFabrica: (ganancias,idFabrica,celdas) => dispatch(getFabrica(ganancias,idFabrica, celdas))}})(Fabrica)


const dibujarFabricas = (fabricas, username) => {

    var array = [];
    for (var i=0; i< fabricas.length; i++){
        array.push(
        <FabricaConnected key={i} 
          nombre={fabricas[i].nombre} 
          ganancias={fabricas[i].ganancias} 
          id={fabricas[i].id_fabrica} 
          celdas={fabricas[i].celdas}
          username={username}>
        </FabricaConnected>
        )
    }
    return array;
};


const UsuarioFabricaPage = (usuario) => (
  <div>
     <div className="Container">
        <h1>Wayne's Tech</h1>
        <div className="UsuarioFabricaPage">      
            {dibujarFabricas(usuario.usuario.fabricas, usuario.usuario.username)}
        </div>
      </div>
  </div>
);



export default UsuarioFabricaPage;
