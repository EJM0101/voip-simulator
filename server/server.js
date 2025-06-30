const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// API VoIP
app.post('/api/call/initiate', (req, res) => {
  res.json({
    message: 'SIP INVITE envoyé',
    responses: ['100 Trying', '180 Ringing', '200 OK']
  });
});

app.post('/api/call/accept', (req, res) => {
  res.json({ message: 'ACK envoyé, appel établi' });
});

app.post('/api/call/rtp', (req, res) => {
  res.json({ message: 'Flux RTP actif avec RTCP', codec: 'G.711', bandwidth: '64kbps' });
});

app.post('/api/call/end', (req, res) => {
  res.json({ message: 'BYE envoyé, appel terminé' });
});

// 👉 Servir les fichiers statiques React
app.use(express.static(path.join(__dirname, '../client/dist')));

// 👉 Rediriger toutes les autres routes vers React (index.html)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

// Démarrage serveur
app.listen(PORT, () => {
  console.log(`Serveur backend actif sur le port ${PORT}`);
});