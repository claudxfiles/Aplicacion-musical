import React from 'react';
import * as Tone from 'tone';

function NotationLessons({ userType }) {
  const playNote = (note) => {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(note, "8n");
  };

  return (
    <div className="section-container">
      <h2>Lecciones de Notación Musical</h2>
      {userType === 'child' ? (
        <p>¡Vamos a aprender las notas musicales jugando! 🧸</p>
      ) : (
        <p>Fundamentos de la notación: pentagrama, claves, figuras y silencios.</p>
      )}
      <div className="lesson-item">
        <h3>Lección 1: Las Notas en el Pentagrama</h3>
        <p>Aprende dónde se ubican Do, Re, Mi...</p>
        <button onClick={() => playNote("C4")}>Tocar Do (C4)</button>
        <button onClick={() => playNote("D4")}>Tocar Re (D4)</button>
        <button onClick={() => playNote("E4")}>Tocar Mi (E4)</button>
      </div>
      <div className="lesson-item">
        <h3>Lección 2: Figuras Musicales y Duración</h3>
        <p>Redondas, blancas, negras... ¡cuánto dura cada sonido!</p>
      </div>
      {/* Más lecciones aquí */}
    </div>
  );
}

export default NotationLessons;
