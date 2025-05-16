import React from 'react';

function ScaleRecognition({ userType }) {
  return (
    <div className="section-container">
      <h2>Reconocimiento de Escalas</h2>
      {userType === 'child' ? (
        <p>¡Escucha esta escalera de sonidos y dime cuál es! 🪜</p>
      ) : (
        <p>Identifica escalas mayores, menores (natural, armónica, melódica) y modos.</p>
      )}
      <div className="exercise-item">
        <h3>Ejercicio: Escala Mayor vs. Escala Menor Natural</h3>
        <p>[Botón para reproducir escala, opciones para seleccionar]</p>
      </div>
    </div>
  );
}

export default ScaleRecognition;
