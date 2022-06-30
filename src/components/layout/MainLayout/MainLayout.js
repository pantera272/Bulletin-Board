import React from 'react';
import PropTypes from 'prop-types';

import styles from './MainLayout.module.scss';

import Header from '../Header/Header';
import Banner from '../Banner/Banner';
//import { Homepage } from '../../views/Homepage/Homepage';
//import { Post } from '../../views/Post/Post';
//import ShowAllAnnoucments from '../../features/ShowAllAnnoucments';

const Component = ({children}) => (
  <div name='mainlayout' className={styles.container}>
    <Header />
    <Banner />
    {children}
  </div>  
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as MainLayout,
  // Container as MainLayout,
  Component as MainLayoutComponent,
};
