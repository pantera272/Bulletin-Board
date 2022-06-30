import React from 'react';

import styles from './Header.module.scss';

import NavBar from '../../views/NavBar/NavBar';

const Header = () => (
  <div className={styles.container}>
    <NavBar />
  </div>
);

export default Header;
