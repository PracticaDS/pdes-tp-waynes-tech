import React, { Component } from 'react';
import './App.css';
import { Fabrica } from './Fabrica';
import { ToolBox } from './ToolBox';
import { InfoBox } from './InfoBox';

class App extends Component {
  render() {
    return (
      <div className="Container">
        <h1>Titulo</h1>
        <div className="App">  
          <ToolBox />
          <Fabrica />
          <InfoBox />        
        </div>
      </div>
    );
  }
}

export default App;
