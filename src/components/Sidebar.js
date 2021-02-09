import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const SideBar = ({ openClass }) => {
  return (
    <Router>
    <nav className={openClass === 'open' ? 'opneSidebar' : ''}>
      <ul className="navlist">
        <li>
        <Link to="/" className="menu-item">Home</Link>
        </li>
        <Link to="/slot" className="menu-item">Slot</Link>
        <li>
         
        </li>

        <li>
          <a className="menu-item" href="/pizzas">
            Pizzas
          </a>
        </li>
        <li>
          <a className="menu-item" href="/desserts">
            Desserts
          </a>
        </li>
      </ul>
    </nav>
  </Router>

  );
};

export default SideBar;
