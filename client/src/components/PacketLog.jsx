import React from 'react';

function PacketLog({ logs }) {
  return (
    <div className="log">
      <h3>Logs des paquets :</h3>
      <ul>
        {logs.map((log, index) => (
          <li key={index}>{log}</li>
        ))}
      </ul>
    </div>
  );
}

export default PacketLog;
