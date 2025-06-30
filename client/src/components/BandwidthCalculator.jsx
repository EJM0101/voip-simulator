import React, { useState } from 'react';

function BandwidthCalculator() {
  const [codec, setCodec] = useState('G.711');
  const [calls, setCalls] = useState(1);
  const [result, setResult] = useState("");

  const codecRates = {
    'G.711': 64,
    'G.729': 8,
    'Opus': 24
  };

  const calculate = () => {
    const rate = codecRates[codec];
    const total = rate * calls;
    setResult(`Bande passante requise ≈ ${total} kbps pour ${calls} appel(s) (${codec})`);
  };

  return (
    <div style={{ marginTop: '30px' }}>
      <h3>Calculateur de bande passante VoIP</h3>
      <label>Codec :
        <select value={codec} onChange={e => setCodec(e.target.value)}>
          <option value="G.711">G.711</option>
          <option value="G.729">G.729</option>
          <option value="Opus">Opus</option>
        </select>
      </label>
      <br />
      <label>Nombre d'appels :
        <input type="number" value={calls} onChange={e => setCalls(e.target.value)} />
      </label>
      <br />
      <button onClick={calculate}>Calculer</button>
      <p>{result}</p>
    </div>
  );
}

export default BandwidthCalculator;
