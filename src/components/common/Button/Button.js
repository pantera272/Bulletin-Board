import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';
import clsx from 'clsx';
const Button = (props) => {
  const variant = props.variant;
  return (
    <button className={clsx(styles.button, styles[variant])}>{props.children}</button>
  );  
};

Button.propTypes = {
  children: PropTypes.string,
  variant: PropTypes.string,
};

export default Button;