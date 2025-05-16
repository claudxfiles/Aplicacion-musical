import React from 'react';

function ChordRecognition({ userType }) {
  return (
    <div className="section-container">
      <h2>Reconocimiento de Acordes</h2>
      {userType === 'child' ? (
        <p>¿Este acorde suena feliz o triste? ¡Adivina! 😄😢</p>
      ) : (
        <p>Distingue entre diferentes tipos de acordes (mayores, menores, etc.).</p>
      )}
      <div className="exercise-item">
        <h3>Ejercicio: Acordes Mayores vs. Menores</h3>
        <p>[Botón para reproducir acorde, opciones para seleccionar]</p>
      </div>
    </div>
  );
}

export default ChordRecognition;
