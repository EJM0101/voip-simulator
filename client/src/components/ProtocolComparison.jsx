import React from 'react';

const ProtocolComparison = () => (
  <div>
    <h2>Comparaison des Protocoles VoIP</h2>
    <table border="1">
      <thead>
        <tr>
          <th>Protocole</th>
          <th>Origine</th>
          <th>Type</th>
          <th>Caractéristiques</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>H.323</td>
          <td>UIT</td>
          <td>Complexe, binaire</td>
          <td>Signalisation + média + contrôle, orienté RTC</td>
        </tr>
        <tr>
          <td>SIP</td>
          <td>IETF</td>
          <td>Simple, texte</td>
          <td>Modèle HTTP, extensible, très utilisé</td>
        </tr>
        <tr>
          <td>MGCP</td>
          <td>IETF</td>
          <td>Contrôle des passerelles</td>
          <td>Moins complet, dépend d’un contrôleur</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default ProtocolComparison;