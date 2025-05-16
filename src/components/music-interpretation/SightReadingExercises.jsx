import React from 'react';

function SightReadingExercises({ userType }) {
  return (
    <div className="section-container">
      <h2>Ejercicios de Lectura a Primera Vista</h2>
      {userType === 'child' ? (
        <p>¡Lee las notas y tócalas como un detective musical! 🕵️‍♀️</p>
      ) : (
        <p>Practica la lectura fluida de partituras con ejercicios progresivos.</p>
      )}
      <div className="exercise-item">
        <h3>Ejercicio 1: Melodías Simples en Clave de Sol</h3>
        <p>[Aquí iría una imagen de partitura o interfaz interactiva]</p>
      </div>
      {/* Más ejercicios */}
    </div>
  );
}

export default SightReadingExercises;
