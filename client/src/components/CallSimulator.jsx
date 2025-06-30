import React, { useState } from 'react';
import PacketLog from './PacketLog';

function CallSimulator() {
  const [logs, setLogs] = useState([]);

  const simulate = (label, data) => {
    setLogs((prev) => [...prev, `[${label}] ${data.message}`]);
    if (data.responses) {
      data.responses.forEach((r) =>
        setLogs((prev) => [...prev, `[${label}] ${r}`])
      );
    }
  };

  const fakeApi = (endpoint) => {
    switch (endpoint) {
      case "initiate":
        return { message: "SIP INVITE envoyé", responses: ["100 Trying", "180 Ringing", "200 OK"] };
      case "accept":
        return { message: "ACK envoyé, appel établi" };
      case "rtp":
        return { message: "Flux RTP actif avec RTCP", codec: "G.711", bandwidth: "64kbps" };
      case "end":
        return { message: "BYE envoyé, appel terminé" };
      default:
        return { message: "Commande inconnue" };
    }
  };

  const handleClick = (endpoint, label) => {
    const res = fakeApi(endpoint);
    simulate(label, res);
  };

  return (
    <div>
      <button onClick={() => handleClick("initiate", "SIP")}>Initier l'appel</button>
      <button onClick={() => handleClick("accept", "SIP")}>Accepter</button>
      <button onClick={() => handleClick("rtp", "RTP/RTCP")}>Simuler RTP</button>
      <button onClick={() => handleClick("end", "SIP")}>Terminer</button>
      <PacketLog logs={logs} />
    </div>
  );
}

export default CallSimulator;