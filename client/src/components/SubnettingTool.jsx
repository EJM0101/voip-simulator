import React, { useState } from 'react';

function SubnettingTool() {
  const [hosts, setHosts] = useState(0);
  const [result, setResult] = useState("");

  const calculate = () => {
    const h = parseInt(hosts);
    if (h < 1) return setResult("Nombre d'hôtes invalide");
    let bits = 0;
    while ((2 ** bits - 2) < h) bits++;
    const subnetMask = 32 - bits;
    const maxHosts = 2 ** bits - 2;
    setResult(`Masque CIDR: /${subnetMask}, Hôtes utilisables: ${maxHosts}`);
  };

  return (
    <div style={{ marginTop: '30px' }}>
      <h3>Outil de calcul de sous-réseaux</h3>
      <input type="number" value={hosts} onChange={e => setHosts(e.target.value)} placeholder="Nombre d'hôtes par sous-réseau" />
      <button onClick={calculate}>Calculer</button>
      <p>{result}</p>
    </div>
  );
}

export default SubnettingTool;
