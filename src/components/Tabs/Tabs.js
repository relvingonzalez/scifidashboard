import React, { useEffect, useState, useMemo } from 'react';
import styles from './Tabs.module.css';
import Header from '../Header/Header';

export const TabButton = ({ children, isActive, onClick }) => (
  <li tabIndex="0" role="menuitem" className={`${styles.tabButton} ${isActive && styles.activeTab}`} data-testid="MenuItem" onClick={onClick}>
    {children}
  </li>
);

// data in the form { tabName: string, tabTitle: string, tabContentComponent: React.Element }

const Tabs = ({ data = [] }) => {
  const [tab, setTab] = useState();
  const CurrentTab = useMemo(() => {
    const current = data.find(d => d.tabName === tab);
    return current ? <current.tabContentComponent /> : <></>;
  }, [data, tab]);

  useEffect(() => {
    if(data.length) {
      setTab(data[0].tabName);
    }
  }, [data]);

  if (!data) {
    return <p>Loading Data...</p>;
  }

  return (
    <div className={styles.Tabs} data-testid="Dashboard">
      <Header>
        {
          data.map((d, i) => (
            <TabButton key={i} isActive={tab === d.tabName} onClick={() => setTab(d.tabName)}>{d.tabTitle}</TabButton>
          ))
        }
      </Header>
      <div className={styles.tabContent}>
        { CurrentTab }
      </div>
    </div>
  );
};

Tabs.propTypes = {};

Tabs.defaultProps = {};

export default Tabs;
