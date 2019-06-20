import React from 'react';

export type Props = {
    saveGame: (idJuego, ganancias, celdas) => void,
    gameState: GameType
}

const convertCeldas = (celdas) => {
    const response = [];
    for (var i=0; i< celdas.length; i++){
        response.push({ idFila: celdas[i].idFila, idColumna: celdas[i].id , maquina: celdas[i].maquina } );
    };
    return response;
}

export const SaveButton = ({ saveGame, gameState }: Props) => (
    <div>
        <button type="button" className="saveButton" 
            onClick={() => saveGame(1, gameState.statusInfoBox.ganancias, convertCeldas(gameState.celdas)) } >
            Save
        </button>
    </div>
); 


export default SaveButton;