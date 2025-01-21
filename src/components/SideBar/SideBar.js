import React from 'react';
import styles from './SideBar.module.css';

const SideBar = ({ isOpen, children }) => (
    <nav className={`${styles.SideBar} ${isOpen && styles.open}`} data-testid="SideBar">
      <h1 className="brand">{isOpen && 'Oracle'}</h1>
      <ul>
        {children}
      </ul>
    </nav>
);

SideBar.propTypes = {};

SideBar.defaultProps = {};

export default SideBar;
