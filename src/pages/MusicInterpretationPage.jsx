import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './SubPage.css';

function MusicInterpretationPage({ userType }) {
  const basePath = `/${userType}/interpretation`;
  return (
    <div className="page-container">
      <h1>Interpretación Musical</h1>
      <nav className="sub-nav">
        <NavLink to={`${basePath}/notation`} className={({ isActive }) => isActive ? "active-sub-link" : ""}>Lecciones de Notación</NavLink>
        <NavLink to={`${basePath}/sight-reading`} className={({ isActive }) => isActive ? "active-sub-link" : ""}>Lectura a Primera Vista</NavLink>
        <NavLink to={`${basePath}/library`} className={({ isActive }) => isActive ? "active-sub-link" : ""}>Biblioteca de Piezas</NavLink>
      </nav>
      <div className="sub-content">
        <Outlet />
      </div>
    </div>
  );
}

export default MusicInterpretationPage;
