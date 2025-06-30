import React from 'react';
import CallSimulator from './components/CallSimulator';
import SubnettingTool from './components/SubnettingTool';
import BandwidthCalculator from './components/BandwidthCalculator';
import ExamTrainer from './components/ExamTrainer';

function App() {
  return (
    <div className="App">
      <h1>Simulateur VoIP (SIP/RTP/RTCP)</h1>
      <CallSimulator />
      <SubnettingTool />
      <BandwidthCalculator />
      <ExamTrainer />
    </div>
  );
}

export default App;
