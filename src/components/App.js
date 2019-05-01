import React from 'react';
import './App.css';
import { Fabrica } from './Fabrica';
import  ToolBox    from '../containers/ContainerToolBox';
import { InfoBox } from './InfoBox';

const App = () => (
  <div>
     <div className="Container">
        <h1>Wayne's Tech</h1>
        <div className="App">  
          <ToolBox/>
          <Fabrica className="fabrica" filas="10" columnas="15" />
          <InfoBox />        
        </div>
      </div>
  </div>
);

export default App;










