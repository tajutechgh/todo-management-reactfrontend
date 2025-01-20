import React from 'react'
import { NavLink } from 'react-router-dom'
import { isUserLoggedIn, logout } from '../services/AuthService';
import { useNavigate } from 'react-router-dom';

const HeaderComponent = () => {

  const navigator = useNavigate();

  function logoutUser(){

      logout();

      navigator('/login');
  }

  const isAuth = isUserLoggedIn();

  return (
    <div>
      <nav className="navbar bg-primary navbar-expand-lg" data-bs-theme="dark">
        <div className="container">
          <a className="navbar-brand" href="http://localhost:3000/todos">Todo Management System</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {
                isAuth && 
                <li className="nav-item">
                  <NavLink className="nav-link" to="/todos">Todos</NavLink>
                </li>
              }
            </ul>
          </div>
          <ul className="navbar-nav">
            {
              !isAuth &&
              <li className="nav-item">
                <NavLink className="nav-link" to="/register">Register</NavLink>
              </li>
            }
            {
              !isAuth &&
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">Login</NavLink>
              </li>
            }
            {
              isAuth &&
              <li className="nav-item">
                <NavLink className="nav-link" to="/login" onClick={logoutUser}>Logout</NavLink>
              </li>
            }
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default HeaderComponent