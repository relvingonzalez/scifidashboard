import React from 'react';
import styles from './SideBar.module.css';
import Button from '../Button/Button';
import { ChevronsLeft, ChevronsRight } from 'lucide-react';

const SideBar = ({ isOpen, onToggleOpen, children }) => (
    <nav className={`${styles.SideBar} ${isOpen && styles.open}`} data-testid="SideBar">
      <Button className={`font-lg ${styles.toggle}`} onClick={() => onToggleOpen(!isOpen)}>
        {isOpen ? <ChevronsLeft /> : <ChevronsRight />}
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
