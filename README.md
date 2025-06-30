# 🎧 Simulateur Web de Téléphonie sur IP (VoIP / ToIP)

Ce projet est une **application web interactive éducative** permettant de simuler les protocoles et mécanismes fondamentaux de la Téléphonie sur IP (VoIP/ToIP), notamment : **SIP, RTP, RTCP, QoS, codecs audio et sous-réseautage IP**.

## 🚀 Fonctionnalités principales

- 📞 **Simulation d'appels VoIP (SIP / RTP / RTCP)**  
  Voir les échanges de paquets SIP (INVITE, RINGING, ACK, BYE), RTP, et rapports RTCP.

- 🧮 **Calculateur de sous-réseaux**  
  Donne automatiquement le masque CIDR et le nombre d’hôtes utilisables.

- 📶 **Calculateur de bande passante VoIP**  
  Compare les codecs (G.711, G.729, Opus) et la bande passante requise selon le nombre d’appels.

- 📝 **Entraînement aux examens**  
  Questions typiques des examens universitaires sur les concepts de VoIP et réseaux IP.

## 🧱 Stack technologique

| Composant  | Technologie |
|------------|-------------|
| Frontend   | React.js + Vite |
| Backend    | Node.js + Express |
| Déploiement | Render.com |
| Protocoles simulés | SIP, RTP, RTCP |

## 📁 Structure du projet

```
voip-simulator/
├── client/           # Frontend React
│   └── src/components/
│       ├── CallSimulator.jsx
│       ├── SubnettingTool.jsx
│       ├── BandwidthCalculator.jsx
│       └── ExamTrainer.jsx
├── server/           # Backend Node.js
│   └── server.js
├── render.yaml       # Déploiement Render
└── README.md         # Ce fichier
```

## ⚙️ Lancement local

### 1. Cloner le dépôt

```bash
git clone https://github.com/EJM0101/voip-simulator.git
cd voip-simulator
```

### 2. Lancer le backend

```bash
cd server
npm install
npm start
```

### 3. Lancer le frontend

```bash
cd ../client
npm install
npm run dev
```

Accéder à l'application sur : `http://localhost:5173`

## ☁️ Déploiement Render

Le projet est prêt pour Render avec `render.yaml`. Il contient deux services :
- **Backend Node.js** (Express)
- **Frontend React.js** (buildé en static site)

> Voir : https://render.com

## 📚 Cas d’utilisation pédagogique

- Étudiants en réseaux et télécoms (L2/L3/ING)
- TP interactifs de VoIP
- Préparation aux examens avec visualisation des flux
- Support à l’enseignement de SIP/RTP/RTCP

## 👨‍💻 Auteur

Projet développé par **Emman Mlmb**  
Étudiant en Informatique, Université de Kinshasa  
Passionné par les solutions éducatives numériques 🌐

---

🛠️ Licence : MIT | ✨ Contributions bienvenues !
