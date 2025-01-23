import React from 'react';
import styles from './Button.module.css';

const Button = ({ className, children, variant, onClick }) => (
  <button className={`${styles.Button} ${className} ${variant === 'unstyled' && styles.unstyled}`} data-testid="Button" onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {};

Button.defaultProps = {};

export default Button;
