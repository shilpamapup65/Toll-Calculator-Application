import React from 'react';
import TollCalculator from '../containers/TollCalculator';
import Tooltip from '../components/Tooltip';
import TollGuruService from '../services/TollGuruService';
import PolylineDecoderService from '../services/polylineDecoderService';


const tollGuruService = new TollGuruService('your-tollguru-api-key');


function App() {
  return (
    <div className="App">
      <TollCalculator tollGuruService={tollGuruService} />
      <Tooltip text="Your tooltip text" />
    </div>
  );
}

export default App;
