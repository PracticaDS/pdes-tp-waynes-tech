import React from 'react';
import './App.css';
import  Fabrica    from '../containers/ContainerFabrica';
import  ToolBox    from '../containers/ContainerToolBox';
import  InfoBox    from '../containers/ContainerInfoBox';

const App = () => (

  <div>
     <div className="Container">
        <h1>Wayne's Tech</h1>
        <div className="App">  
          <ToolBox/>
          <Fabrica/>
          <InfoBox />        
        </div>
      </div>
  </div>
);

export default App;










