import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

function ChildDashboard() {
  return (
    <div className="dashboard-container child-dashboard">
      <h1>¡Hola, Peque Músico! 🎵</h1>
      <p>¿Qué aventura musical quieres empezar hoy?</p>
      <div className="dashboard-grid">
        <Link to="/child/interpretation" className="dashboard-card">
          <h2>Leer Música 🎼</h2>
          <p>Aprende notas y ritmos divertidos.</p>
        </Link>
        <Link to="/child/aural-skills" className="dashboard-card">
          <h2>Entrenar el Oído 👂</h2>
          <p>Escucha y adivina los sonidos.</p>
        </Link>
        <Link to="/child/improvisation" className="dashboard-card">
          <h2>Crear Música ✨</h2>
          <p>Inventa tus propias melodías.</p>
        </Link>
      </div>
    </div>
  );
}

export default ChildDashboard;
