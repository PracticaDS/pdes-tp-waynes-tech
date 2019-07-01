import React from 'react';

export type Props = {
    saveGame: (idJuego, ganancias, celdas) => void,
    gameState: GameType,
  
}

/* convierne las celdas al formato que el backend espera */
const convertCeldas = (celdas) => {
    const response = [];
    for (var i=0; i< celdas.length; i++){
        response.push({ idFila: celdas[i].idFila, idColumna: celdas[i].id , maquina: celdas[i].maquina } );
    };
    return response;
}

export const SaveButton = ({ saveGame, gameState, usuario }: Props) => (
    <div>
        <button type="button" className="saveButton" 
            onClick={() => saveGame(usuario.username, usuario.idFabrica, gameState.statusInfoBox.ganancias, convertCeldas(gameState.celdas)) } >
            Save
        </button>
    </div>
); 


export default SaveButton;