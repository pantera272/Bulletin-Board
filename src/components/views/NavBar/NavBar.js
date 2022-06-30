import React from 'react';
import { useSelector } from 'react-redux';
import { getUser } from '../../../redux/userReducer';
import styles from './NavBar.module.scss';
import NavBarNonLogged from './NavBarNonLogged/NavBarNonLogged';
import NavBarLogged from './NavBarLogged/NavBarLogged';

const NavBar = () => {
  
  const user = useSelector(getUser);
  
  return(
    <div name='navbar' className={styles.container}>
      <div><a href='/'><img src='/public/logo.svg' alt='Logo'/></a></div>
      {user.userRights === 'admin' ? <NavBarLogged /> : <NavBarNonLogged />} 
    </div>
  );

};

export default NavBar;