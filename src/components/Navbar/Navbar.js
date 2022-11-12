import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Navbar.module.css';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books  ',
    },
    {
      id: 2,
      path: '/categories',
      text: 'Categories ',
    },
  ];
  return (
    <nav className={styles.navbar}>
      <h2>Bookstore CMS</h2>
      <ul className={styles.navbar_list}>
        {links.map((link) => (
          <li key={link.id}>
            <Link to={link.path}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
