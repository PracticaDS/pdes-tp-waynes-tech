import React from 'react';

export type Props = {
    onClick: () => void
}

export const TickButton = ({ tickMaquinas }: Props) => (
    <div>
        <button type="button" className="tickButton" onClick={() => tickMaquinas()} >
        Start!
        </button>
    </div>
); 


export default TickButton;