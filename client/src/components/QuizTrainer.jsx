import React, { useState } from 'react';

const questions = [
  {
    question: "Quelle est la bande passante nécessaire pour 10 appels VoIP G.711 ?",
    options: ["640 kbps", "800 kbps", "960 kbps", "1000 kbps"],
    answer: "800 kbps"
  },
  {
    question: "Quel protocole permet la synchronisation des flux RTP ?",
    options: ["SIP", "SRTP", "RTCP", "MGCP"],
    answer: "RTCP"
  },
  {
    question: "Quelle est l’adresse de diffusion de 132.45.96.0/19 ?",
    options: ["132.45.127.255", "132.45.96.255", "132.45.111.255", "132.45.255.255"],
    answer: "132.45.127.255"
  }
];

const QuizTrainer = () => {
  const [score, setScore] = useState(0);
  const [step, setStep] = useState(0);
  const [feedback, setFeedback] = useState("");

  const handleAnswer = (opt) => {
    if (opt === questions[step].answer) {
      setScore(score + 1);
      setFeedback("✅ Correct !");
    } else {
      setFeedback("❌ Faux. Réponse : " + questions[step].answer);
    }
    setTimeout(() => {
      setStep(step + 1);
      setFeedback("");
    }, 1500);
  };

  if (step >= questions.length) {
    return <h3>Votre score : {score} / {questions.length}</h3>;
  }

  return (
    <div>
      <h4>{questions[step].question}</h4>
      {questions[step].options.map((opt, i) => (
        <button key={i} onClick={() => handleAnswer(opt)}>{opt}</button>
      ))}
      <p>{feedback}</p>
    </div>
  );
};

export default QuizTrainer;