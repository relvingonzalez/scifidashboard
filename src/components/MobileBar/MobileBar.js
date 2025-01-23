import React from 'react';
import styles from './MobileBar.module.css';
import Button from '../Button/Button';
import { ChevronsLeft, ChevronsRight } from 'lucide-react';

const MobileBar = ({ children }) => (
  <nav className={styles.MobileBar} data-testid="MobileBar">
    <h1 className={styles.brand}>
      <span>HAL</span>
      <span>9000</span>
    </h1>
    <ul>
      {children}
    </ul>
  </nav>
);

MobileBar.propTypes = {};

MobileBar.defaultProps = {};

export default MobileBar;