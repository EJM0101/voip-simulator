import React, { useState } from 'react';
import PacketLog from './PacketLog';

function CallSimulator() {
  const [logs, setLogs] = useState([]);

  const sendRequest = async (endpoint, label) => {
    const res = await fetch(`/api/call/${endpoint}`, { method: 'POST' });
    const data = await res.json();
    setLogs((prev) => [...prev, `[${label}] ${data.message}`]);
    if (data.responses) {
      data.responses.forEach((r) => setLogs((prev) => [...prev, `[${label}] ${r}`]));
    }
  };

  return (
    <div>
      <button onClick={() => sendRequest("initiate", "SIP")}>Initier l'appel</button>
      <button onClick={() => sendRequest("accept", "SIP")}>Accepter</button>
      <button onClick={() => sendRequest("rtp", "RTP/RTCP")}>Simuler RTP</button>
      <button onClick={() => sendRequest("end", "SIP")}>Terminer</button>
      <PacketLog logs={logs} />
    </div>
  );
}

export default CallSimulator;
