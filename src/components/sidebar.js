import React from 'react';
import '../App.css';
import logo from '../images/instagramlogo.png';
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div style={ {height: '100%'} }>
      <nav className="d-none d-md-block bg-light sidebar pt-3 m-0" style={ {height: '100%'} }>
        <div className="sidebar-sticky bg-light">
          <img src={ logo } width="200px" height="200px" alt="instagram logo"/>
          <ul className="nav flex-column">
            <Link className="sidebarlink nav-item text-dark text-center border-bottom border-top border-muted m-0 p-3" to="/">Home</Link>
            <Link className="sidebarlink nav-item text-dark text-center border-bottom border-muted mt-3 pb-3" to="/users/1">My Profile</Link>
            <a href="#" className="sidebarlink nav-item text-dark text-center border-bottom border-muted mt-3 pb-3">Login</a>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Sidebar;
