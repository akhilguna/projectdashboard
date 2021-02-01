import React from 'react';

const SideBar = ({ openClass }) => {
  return (
    <nav className={openClass === 'open' ? 'opneSidebar' : ''}>
      <ul className="navlist">
        <li>
          <a className="menu-item" href="/">
            Home
          </a>
        </li>

        <li>
          <a className="menu-item" href="/burgers">
            Burgers
          </a>
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
  );
};

export default SideBar;
