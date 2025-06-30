import React, { useState } from 'react';
import CallSimulator from './components/CallSimulator';
import SubnettingTool from './components/SubnettingTool';
import BandwidthCalculator from './components/BandwidthCalculator';
import ExamTrainer from './components/ExamTrainer';
import ProtocolComparison from './components/ProtocolComparison';
import SecurityTips from './components/SecurityTips';
import MigrationSteps from './components/MigrationSteps';
import QuizTrainer from './components/QuizTrainer';
import '../styles/style.css';

function App() {
  const [activeTab, setActiveTab] = useState('call');

  const renderTab = () => {
    switch (activeTab) {
      case 'call': return <CallSimulator />;
      case 'subnet': return <SubnettingTool />;
      case 'bandwidth': return <BandwidthCalculator />;
      case 'exam': return <ExamTrainer />;
      case 'protocols': return <ProtocolComparison />;
      case 'security': return <SecurityTips />;
      case 'migration': return <MigrationSteps />;
      case 'quiz': return <QuizTrainer />;
      default: return <CallSimulator />;
    }
  };

  return (
    <div className="App">
      <h1>📞 Simulateur VoIP (SIP / RTP / RTCP)</h1>
      
      <nav style={{ marginBottom: '20px' }}>
        <button onClick={() => setActiveTab('call')}>📲 Appel SIP</button>
        <button onClick={() => setActiveTab('subnet')}>📡 Subnetting</button>
        <button onClick={() => setActiveTab('bandwidth')}>📏 Bande Passante</button>
        <button onClick={() => setActiveTab('exam')}>📘 Examens</button>
        <button onClick={() => setActiveTab('protocols')}>📚 Protocoles</button>
        <button onClick={() => setActiveTab('security')}>🔐 Sécurité</button>
        <button onClick={() => setActiveTab('migration')}>🧭 Migration</button>
        <button onClick={() => setActiveTab('quiz')}>📝 Quiz</button>
      </nav>

      <hr />
      {renderTab()}
    </div>
  );
}

export default App;