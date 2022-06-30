import React from 'react';
import Button from '../../../common/Button/Button';

const NavBarLogged = () => (
  <div>
    <a href='userposts'><Button variant='white'>My Adverts</Button></a>
    <a href='google.com/login'><Button variant='dark'>Log out</Button></a> 
  </div>
);

export default NavBarLogged;