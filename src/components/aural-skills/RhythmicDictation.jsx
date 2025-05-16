import React from 'react';

function RhythmicDictation({ userType }) {
  return (
    <div className="section-container">
      <h2>Dictado Rítmico</h2>
      {userType === 'child' ? (
        <p>¡Sigue el ritmo con tus palmas y luego escríbelo! 👏</p>
      ) : (
        <p>Transcribe patrones rítmicos.</p>
      )}
      <div className="exercise-item">
        <h3>Ejercicio: Ritmos con Negras y Corcheas</h3>
        <p>[Botón para reproducir ritmo, interfaz para escribir/seleccionar figuras rítmicas]</p>
      </div>
    </div>
  );
}

export default RhythmicDictation;
