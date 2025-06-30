const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post('/api/call/initiate', (req, res) => {
  res.json({ message: 'SIP INVITE envoyé', responses: ['100 Trying', '180 Ringing', '200 OK'] });
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

app.listen(PORT, () => {
  console.log(`Serveur backend actif sur le port ${PORT}`);
});
