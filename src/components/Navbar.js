import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 2,
      path: '/categories',
      text: 'Categories',
    },
  ];
  return (
    <nav className="navBar">
      <h1>
        Bookstore
      </h1>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink to={link.path} className="active-link border">
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
