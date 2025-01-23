import React from 'react';
import styles from './SideBar.module.css';
import Button from '../Button/Button';

const SideBar = ({ isOpen, onToggleOpen, children }) => (
    <nav className={`${styles.SideBar} ${isOpen && styles.open}`} data-testid="SideBar">
      <Button variant="unstyled" className={`font-lg ${styles.toggle}`} onClick={() => onToggleOpen(!isOpen)}>
        <p className={`${isOpen && 'rotate'}`}>+</p>
      </Button>
      <h1 className="brand">{isOpen ? 'HAL 9000' : 'H'}</h1>
      <ul>
        {children}
      </ul>
    </nav>
);

SideBar.propTypes = {};

SideBar.defaultProps = {};

export default SideBar;
