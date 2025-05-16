import React from 'react';

function MelodicDictation({ userType }) {
  return (
    <div className="section-container">
      <h2>Dictado Melódico</h2>
      {userType === 'child' ? (
        <p>Escucha la melodía y dibuja las notas que oyes. 🎨</p>
      ) : (
        <p>Transcribe melodías cortas después de escucharlas.</p>
      )}
      <div className="exercise-item">
        <h3>Ejercicio: Dictado Simple a 3 Notas</h3>
        <p>[Botón para reproducir melodía, interfaz para escribir/seleccionar notas]</p>
      </div>
    </div>
  );
}

export default MelodicDictation;
