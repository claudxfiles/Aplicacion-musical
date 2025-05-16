import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './SubPage.css';

function ImprovisationPage({ userType }) {
  const basePath = `/${userType}/improvisation`;
  return (
    <div className="page-container">
      <h1>Improvisación Musical</h1>
      <nav className="sub-nav">
        <NavLink to={`${basePath}/theory`} className={({ isActive }) => isActive ? "active-sub-link" : ""}>Teoría de Improvisación</NavLink>
        <NavLink to={`${basePath}/guided`} className={({ isActive }) => isActive ? "active-sub-link" : ""}>Improvisación Guiada</NavLink>
        <NavLink to={`${basePath}/record`} className={({ isActive }) => isActive ? "active-sub-link" : ""}>Graba tu Improvisación</NavLink>
      </nav>
      <div className="sub-content">
        <Outlet />
      </div>
    </div>
  );
}

export default ImprovisationPage;
