import React from 'react';
import './UserSelection.css';

function UserSelection({ onSelect }) {
  return (
    <div className="user-selection-container">
      <h1>¡Bienvenido a Aprende Música!</h1>
      <p>Para comenzar, por favor elige tu perfil:</p>
      <div className="profiles">
        <button onClick={() => onSelect('child')} className="profile-button child-profile">
          Soy un Niño
          <span className="profile-icon">🧒</span>
        </button>
        <button onClick={() => onSelect('adult')} className="profile-button adult-profile">
          Soy un Adulto
          <span className="profile-icon">🧑</span>
        </button>
      </div>
    </div>
  );
}

export default UserSelection;
