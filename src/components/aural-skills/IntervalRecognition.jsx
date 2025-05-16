import React, { useState } from 'react';
import * as Tone from 'tone';

const intervals = [
  { name: "Unísono", semitones: 0, ratio: "1:1" },
  { name: "Segunda Menor", semitones: 1, ratio: "16:15" },
  { name: "Segunda Mayor", semitones: 2, ratio: "9:8" },
  { name: "Tercera Menor", semitones: 3, ratio: "6:5" },
  { name: "Tercera Mayor", semitones: 4, ratio: "5:4" },
  { name: "Cuarta Justa", semitones: 5, ratio: "4:3" },
  { name: "Tritono", semitones: 6, ratio: "45:32 o 64:45" },
  { name: "Quinta Justa", semitones: 7, ratio: "3:2" },
  { name: "Sexta Menor", semitones: 8, ratio: "8:5" },
  { name: "Sexta Mayor", semitones: 9, ratio: "5:3" },
  { name: "Séptima Menor", semitones: 10, ratio: "16:9 o 9:5" },
  { name: "Séptima Mayor", semitones: 11, ratio: "15:8" },
  { name: "Octava", semitones: 12, ratio: "2:1" },
];

const baseNotes = ["C4", "Db4", "D4", "Eb4", "E4", "F4"];

function IntervalRecognition({ userType }) {
  const [currentInterval, setCurrentInterval] = useState(null);
  const [feedback, setFeedback] = useState("");

  const playInterval = (semitones) => {
    const synth = new Tone.PolySynth(Tone.Synth).toDestination();
    const now = Tone.now();
    const baseNote = baseNotes[Math.floor(Math.random() * baseNotes.length)];
    const secondNote = Tone.Frequency(baseNote).transpose(semitones).toNote();
    
    synth.triggerAttack(baseNote, now);
    synth.triggerAttack(secondNote, now + 0.5); // Tocar armónicamente después de un breve instante
    // O para tocar melódicamente:
    // synth.triggerAttackRelease(baseNote, "8n", now);
    // synth.triggerAttackRelease(secondNote, "8n", now + 0.5);
    
    // Liberar después de un tiempo para evitar que suenen indefinidamente
    synth.triggerRelease([baseNote, secondNote], now + 1.5);
  };

  const startExercise = () => {
    setFeedback("");
    const randomIndex = Math.floor(Math.random() * intervals.length);
    const selectedInterval = intervals[randomIndex];
    setCurrentInterval(selectedInterval);
    playInterval(selectedInterval.semitones);
  };

  const handleGuess = (guessedSemitones) => {
    if (!currentInterval) return;
    if (guessedSemitones === currentInterval.semitones) {
      setFeedback(`¡Correcto! Era un(a) ${currentInterval.name}.`);
    } else {
      const correctAnswer = intervals.find(i => i.semitones === guessedSemitones)?.name || "Desconocido";
      setFeedback(`Incorrecto. Era un(a) ${currentInterval.name}, no un(a) ${correctAnswer}. ¡Intenta de nuevo!`);
    }
    // Podríamos querer volver a tocar el intervalo correcto o el que se adivinó
    // playInterval(currentInterval.semitones);
  };

  return (
    <div className="section-container">
      <h2>Reconocimiento de Intervalos</h2>
      {userType === 'child' ? (
        <p>¿Puedes adivinar qué tan lejos están estos dos sonidos? 🧚</p>
      ) : (
        <p>Identifica los intervalos musicales escuchando dos notas.</p>
      )}
      <button onClick={startExercise} className="btn">Nuevo Intervalo</button>
      {currentInterval && (
        <button onClick={() => playInterval(currentInterval.semitones)} className="btn" style={{marginLeft: '10px'}}>Repetir Sonido</button>
      )}

      {currentInterval && (
        <div className="options-grid" style={{marginTop: '20px'}}>
          {intervals.slice(0, userType === 'child' ? 6 : intervals.length).map((interval) => ( // Menos opciones para niños
            <button 
              key={interval.semitones} 
              onClick={() => handleGuess(interval.semitones)}
              className="btn option-btn"
            >
              {interval.name}
            </button>
          ))}
        </div>
      )}
      {feedback && <p style={{marginTop: '20px', fontWeight: 'bold'}}>{feedback}</p>}
      <style jsx>{`
        .options-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 10px;
        }
        .option-btn {
          padding: 10px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}

export default IntervalRecognition;
