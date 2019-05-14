import React from 'react';
import  ButtonToolBox   from './ButtonToolBox';
import type { Buttons } from '../types/ButtonType';
import type {  Id }     from '../types/Utils';
import './ToolBox.css';


export type Props = {
  botones: Buttons,
  onButtonToolClick: (id: Id) => void
};


export const ToolBox = ({ botones, onButtonToolClick }: Props) => (
  <div className="ToolBox">
    <h3>Máquinas</h3>
     <table>
       <tbody>
         <tr>
           <td>
            <ButtonToolBox onClick={() => onButtonToolClick(botones[0].id, botones[0].name, botones[0].price)}
                           image={botones[0].image} 
                           press={botones[0].press} />
           </td>
           <td>
           <ButtonToolBox onClick={() => onButtonToolClick(botones[1].id, botones[1].name, botones[1].price)}
                           image={botones[1].image} 
                           press={botones[1].press} />
           </td>
         </tr>
         <tr>
           <td>
            <ButtonToolBox onClick={() => onButtonToolClick(botones[2].id, botones[2].name, botones[2].price)}
                           image={botones[2].image} 
                           press={botones[2].press} />
           </td>
           <td>
           <ButtonToolBox onClick={() => onButtonToolClick(botones[3].id, botones[3].name, botones[3].price)}
                           image={botones[3].image} 
                           press={botones[3].press} />
           </td>
         </tr>
         <tr>
           <td>
            <ButtonToolBox onClick={() => onButtonToolClick(botones[4].id, botones[4].name, botones[4].price)}
                           image={botones[4].image} 
                           press={botones[4].press} />
           </td>
         </tr>
       </tbody>
     </table>
    <h3>Edición</h3>
     <table>
       <tbody>
         <tr>
           <td>
            <ButtonToolBox onClick={() => onButtonToolClick(botones[5].id, botones[5].name, botones[5].price)}
                           image={botones[5].image} 
                           press={botones[5].press} />
           </td>
           <td>
           <ButtonToolBox onClick={() => onButtonToolClick(botones[6].id, botones[6].name, botones[6].price)}
                           image={botones[6].image} 
                           press={botones[6].press} />
           </td>
         </tr>
         <tr>
           <td>
            <ButtonToolBox onClick={() => onButtonToolClick(botones[7].id, botones[7].name, botones[7].price)}
                           image={botones[7].image} 
                           press={botones[7].press} />
           </td>
         </tr>
       </tbody>
     </table>
  </div>
);


export default ToolBox;