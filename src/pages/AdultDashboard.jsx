import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

function AdultDashboard() {
  return (
    <div className="dashboard-container adult-dashboard">
      <h1>Panel Principal para Adultos</h1>
      <p>Selecciona un área para desarrollar tus habilidades musicales.</p>
      <div className="dashboard-grid">
        <Link to="/adult/interpretation" className="dashboard-card">
          <h2>Interpretación de Partituras</h2>
          <p>Domina la lectura musical y la teoría.</p>
        </Link>
        <Link to="/adult/aural-skills" className="dashboard-card">
          <h2>Entrenamiento Auditivo</h2>
          <p>Perfecciona tu oído musical.</p>
        </Link>
        <Link to="/adult/improvisation" className="dashboard-card">
          <h2>Introducción a la Improvisación</h2>
          <p>Explora la creatividad y la expresión musical.</p>
        </Link>
      </div>
    </div>
  );
}

export default AdultDashboard;
