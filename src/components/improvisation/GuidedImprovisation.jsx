import React from 'react';

function GuidedImprovisation({ userType }) {
  return (
    <div className="section-container">
      <h2>Improvisación Guiada</h2>
      {userType === 'child' ? (
        <p>¡Toca junto con la música de fondo y crea tu solo! 🎸🥁</p>
      ) : (
        <p>Practica la improvisación sobre pistas de acompañamiento en diversos estilos.</p>
      )}
      <div className="exercise-item">
        <h3>Pista de Blues en La Menor</h3>
        <p>[Reproductor de pista de fondo, sugerencias de escalas/notas]</p>
      </div>
    </div>
  );
}

export default GuidedImprovisation;
