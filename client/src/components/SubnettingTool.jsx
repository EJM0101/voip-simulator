import React, { useState } from 'react';

function ipToBinary(ip) {
  return ip.split('.')
    .map(octet => parseInt(octet).toString(2).padStart(8, '0'))
    .join('.');
}

function binaryToIp(bin) {
  return bin.split('.')
    .map(b => parseInt(b, 2))
    .join('.');
}

function incrementIp(ip, step) {
  const parts = ip.split('.').map(Number);
  let addr = (parts[0] << 24) | (parts[1] << 16) | (parts[2] << 8) | parts[3];
  addr += step;
  return [
    (addr >>> 24) & 255,
    (addr >>> 16) & 255,
    (addr >>> 8) & 255,
    addr & 255
  ].join('.');
}

function SubnettingTool() {
  const [baseIp, setBaseIp] = useState("192.168.0.0");
  const [hosts, setHosts] = useState("");
  const [result, setResult] = useState("");
  const [subnets, setSubnets] = useState([]);

  const calculate = () => {
    const h = parseInt(hosts);
    if (!baseIp || isNaN(h) || h < 1) {
      setResult("⚠️ Entrez une IP valide et un nombre d'hôtes ≥ 1");
      return;
    }

    let bits = 0;
    while ((2 ** bits - 2) < h) bits++;
    const subnetMask = 32 - bits;
    const totalHosts = 2 ** bits - 2;
    const step = 2 ** bits;

    const binary = ipToBinary(baseIp);
    const ipBack = binaryToIp(binary);

    setResult(`✅ Masque CIDR : /${subnetMask}
🧮 Hôtes utilisables : ${totalHosts}
🔁 IP binaire : ${binary}
🔁 IP restaurée : ${ipBack}`);

    // Générer les 4 premiers sous-réseaux
    const generatedSubnets = [];
    for (let i = 0; i < 4; i++) {
      const network = incrementIp(baseIp, i * step);
      const broadcast = incrementIp(network, step - 1);
      const first = incrementIp(network, 1);
      const last = incrementIp(network, step - 2);
      generatedSubnets.push({
        index: i + 1,
        network,
        broadcast,
        first,
        last
      });
    }

    setSubnets(generatedSubnets);
  };

  return (
    <div className="tool-box">
      <h3>📡 Outil Subnetting & Conversion IP</h3>

      <div className="input-group">
        <label>Adresse IP :</label>
        <input type="text" value={baseIp} onChange={e => setBaseIp(e.target.value)} />
      </div>

      <div className="input-group">
        <label>Nombre d’hôtes par sous-réseau :</label>
        <input type="number" value={hosts} onChange={e => setHosts(e.target.value)} />
      </div>

      <button onClick={calculate}>Calculer</button>

      <pre className="result-box">{result}</pre>

      {subnets.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h4>🧱 Sous-réseaux générés (4 premiers)</h4>
          <table border="1" cellPadding="8" style={{ width: '100%', background: '#f9f9f9' }}>
            <thead>
              <tr>
                <th>#</th>
                <th>Adresse Réseau</th>
                <th>Adresse 1ère hôte</th>
                <th>Adresse Dernier hôte</th>
                <th>Adresse Diffusion</th>
              </tr>
            </thead>
            <tbody>
              {subnets.map((s, i) => (
                <tr key={i}>
                  <td>{s.index}</td>
                  <td>{s.network}</td>
                  <td>{s.first}</td>
                  <td>{s.last}</td>
                  <td>{s.broadcast}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default SubnettingTool;