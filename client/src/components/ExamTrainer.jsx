import React, { useState } from 'react';

const questions = [
  {
    q: "Combien de bits faut-il pour accueillir 20 hôtes dans un sous-réseau ?",
    a: "/27 (5 bits pour hôtes)"
  },
  {
    q: "Que fait la commande : ip dhcp pool voip ?",
    a: "Crée un pool DHCP nommé 'voip' pour attribuer dynamiquement des IPs."
  },
  {
    q: "Différence entre SIP et H.323 ?",
    a: "SIP est textuel et plus léger, H.323 est binaire et complexe."
  }
];

function ExamTrainer() {
  const [index, setIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const next = () => {
    setShowAnswer(false);
    setIndex((index + 1) % questions.length);
  };

  return (
    <div style={{ marginTop: '30px' }}>
      <h3>Entraînement aux examens</h3>
      <p><strong>Q:</strong> {questions[index].q}</p>
      {showAnswer && <p><strong>R:</strong> {questions[index].a}</p>}
      <button onClick={() => setShowAnswer(true)}>Afficher la réponse</button>
      <button onClick={next}>Question suivante</button>
    </div>
  );
}

export default ExamTrainer;
