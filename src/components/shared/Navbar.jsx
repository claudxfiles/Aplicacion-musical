import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar({ userType, onLogout }) {
  if (!userType) {
    return null; // No mostrar navbar en la pantalla de selección de usuario
  }

  const basePath = `/${userType}`;

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <NavLink to={`${basePath}/dashboard`}>Aprende Música</NavLink>
      </div>
      <ul className="navbar-links">
        <li>
          <NavLink to={`${basePath}/dashboard`} className={({ isActive }) => isActive ? "active-link" : ""}>
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink to={`${basePath}/interpretation`} className={({ isActive }) => isActive ? "active-link" : ""}>
            Interpretación
          </NavLink>
        </li>
        <li>
          <NavLink to={`${basePath}/aural-skills`} className={({ isActive }) => isActive ? "active-link" : ""}>
            Habilidades Auditivas
          </NavLink>
        </li>
        <li>
          <NavLink to={`${basePath}/improvisation`} className={({ isActive }) => isActive ? "active-link" : ""}>
            Improvisación
          </NavLink>
        </li>
      </ul>
      <div className="navbar-actions">
        <span className="user-profile-indicator">
          {userType === 'child' ? 'Peque Músico 🧒' : 'Músico Adulto 🧑'}
        </span>
        <button onClick={onLogout} className="logout-button">Salir</button>
      </div>
    </nav>
  );
}

export default Navbar;
