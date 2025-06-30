import React from 'react';

const SecurityTips = () => (
  <div>
    <h2>Sécurité VoIP</h2>
    <ul>
      <li>✅ Chiffrement : <strong>SRTP</strong> (audio), <strong>TLS</strong> (signalisation)</li>
      <li>🔐 Authentification SIP forte : SIP digest, certificats</li>
      <li>🛡️ VLAN séparés pour VoIP</li>
      <li>🚧 SBC : Session Border Controller</li>
      <li>📶 Pare-feu avec règles VoIP</li>
      <li>⚠️ Prévention SPIT, DDoS, MITM</li>
      <li>📊 Journalisation & Monitoring</li>
    </ul>
  </div>
);

export default SecurityTips;