import React from 'react';

function RecordImprovisation({ userType }) {
  return (
    <div className="section-container">
      <h2>Graba y Comparte tu Improvisación</h2>
      {userType === 'child' ? (
        <p>¡Graba tu canción inventada y muéstrasela a tus amigos! 🎤🌟</p>
      ) : (
        <p>Graba tus improvisaciones, escúchalas y, si quieres, compártelas.</p>
      )}
      <div className="exercise-item">
        <h3>Mi Estudio de Grabación</h3>
        <p>[Controles de grabación, reproducción, y opción de guardar/compartir]</p>
        <button className="btn">Iniciar Grabación</button>
      </div>
    </div>
  );
}

export default RecordImprovisation;
