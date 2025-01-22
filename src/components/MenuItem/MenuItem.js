import React from 'react';
import styles from './MenuItem.module.css';

const MenuItem = ({ className, children, isActive, onClick, isCategory = false }) => (
  <li tabIndex="0" role="menuitem" className={`${!isCategory && styles.MenuItem} ${isActive && styles.active} ${className && className}`} data-testid="MenuItem" onClick={onClick}>
    {children}
  </li>
);

MenuItem.propTypes = {};

MenuItem.defaultProps = {};

export default MenuItem;
