import React from 'react';
import styles from './Button.module.css';

const Button = ({ className, children, onClick }) => (
  <button className={`${styles.Button} ${className}`} data-testid="Button" onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {};

Button.defaultProps = {};

export default Button;
