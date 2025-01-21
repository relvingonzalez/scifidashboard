import React from 'react';
import styles from './Header.module.css';

const Header = ({ children }) => (
  <header className={styles.Header}>
    <nav role="navigation">
      <ul role="menubar">
        {children}
      </ul>
    </nav>
  </header>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
