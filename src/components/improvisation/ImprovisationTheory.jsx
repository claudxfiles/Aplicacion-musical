import React from 'react';

function ImprovisationTheory({ userType }) {
  return (
    <div className="section-container">
      <h2>Teoría para la Improvisación</h2>
      {userType === 'child' ? (
        <p>¡Aprende los secretos para inventar música al instante! 🧙‍♂️</p>
      ) : (
        <p>Conceptos clave: escalas pentatónicas, progresiones comunes, modos.</p>
      )}
      <div className="lesson-item">
        <h3>Lección 1: La Escala Pentatónica Mágica</h3>
        <p>Descubre por qué esta escala suena bien sobre casi todo.</p>
      </div>
    </div>
  );
}

export default ImprovisationTheory;
