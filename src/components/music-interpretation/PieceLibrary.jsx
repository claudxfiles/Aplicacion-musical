import React from 'react';

function PieceLibrary({ userType }) {
  return (
    <div className="section-container">
      <h2>Biblioteca de Piezas Musicales</h2>
      {userType === 'child' ? (
        <p>¡Toca canciones conocidas y divertidas! 🚀</p>
      ) : (
        <p>Explora un repertorio variado, clasificado por dificultad.</p>
      )}
      <div className="lesson-item">
        <h3>Nivel Fácil: "Estrellita dónde estás"</h3>
        <p>[Partitura y opción de reproducción]</p>
      </div>
      <div className="lesson-item">
        <h3>Nivel Intermedio (Adultos): "Para Elisa" (Fragmento)</h3>
        <p>[Partitura y opción de reproducción]</p>
      </div>
      {/* Más piezas */}
    </div>
  );
}

export default PieceLibrary;
