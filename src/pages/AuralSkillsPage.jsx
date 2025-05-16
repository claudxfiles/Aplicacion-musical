import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './SubPage.css';

function AuralSkillsPage({ userType }) {
  const basePath = `/${userType}/aural-skills`;
  return (
    <div className="page-container">
      <h1>Entrenamiento Auditivo</h1>
      <nav className="sub-nav">
        <NavLink to={`${basePath}/intervals`} className={({ isActive }) => isActive ? "active-sub-link" : ""}>Intervalos</NavLink>
        <NavLink to={`${basePath}/chords`} className={({ isActive }) => isActive ? "active-sub-link" : ""}>Acordes</NavLink>
        <NavLink to={`${basePath}/scales`} className={({ isActive }) => isActive ? "active-sub-link" : ""}>Escalas</NavLink>
        <NavLink to={`${basePath}/melodic-dictation`} className={({ isActive }) => isActive ? "active-sub-link" : ""}>Dictado Melódico</NavLink>
        <NavLink to={`${basePath}/rhythmic-dictation`} className={({ isActive }) => isActive ? "active-sub-link" : ""}>Dictado Rítmico</NavLink>
      </nav>
      <div className="sub-content">
        <Outlet />
      </div>
    </div>
  );
}

export default AuralSkillsPage;
