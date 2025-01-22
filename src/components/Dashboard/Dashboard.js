import React, { useState } from 'react';
import styles from './Dashboard.module.css';
import Card from '../Card/Card';
import { PieChart } from '../PieChart/PieChart';
import { pieChartData, polarAreaData, barChartData, lineDataSets } from '../../data/chartData';
import { PolarAreaChart } from '../PolarAreaChart/PolarAreaChart';
import GreetingCard from '../GreetingCard/GreetingCard';
import { BarChart } from '../BarChart/BarChart';
import { LineChart } from '../LineChart/LineChart';
import Header from '../Header/Header';

const TabButton = ({ children, isActive, onClick }) => (
  <li tabIndex="0" role="menuitem" className={`${styles.tabButton} ${isActive && styles.activeTab}`} data-testid="MenuItem" onClick={onClick}>
    {children}
  </li>
);

const Reports = () => (
  <>
    <div className={styles.featuredCharts}>
      <GreetingCard name="Ray" />
      <Card title="Battles" subtitle="Per Month">
        <LineChart datasets={lineDataSets} />
      </Card>
    </div>
    <div className={styles.charts}>
      <Card title="Territories" subtitle="By Species">
        <PieChart data={pieChartData} />
      </Card>

      <Card title="Bounties" subtitle="Proximity">
        <PolarAreaChart data={polarAreaData} />
      </Card>

      <Card title="Resources" subtitle="Milky Way Galaxy">
        <BarChart data={barChartData} />
      </Card>
    </div>
  </>
);

const Guide = () => {
  return (
    <div>
      Guide
    </div>
  )
}

const Dashboard = ({ children, sideBarOpen }) => {
  const [tab, setTab] = useState('reports');

  return (
    <div className={styles.Dashboard} data-testid="Dashboard">
      <Header>
        <TabButton isActive={tab === 'reports'} onClick={() => setTab('reports')}>Reports</TabButton>
        <TabButton isActive={tab === 'guide'} onClick={() => setTab('guide')}>Guide</TabButton>
      </Header>
      <div className={styles.tabContent}>
        {tab === 'reports' && <Reports />}
        {tab === 'guide' && <Guide />}
      </div>
    </div>
  );
};

Dashboard.propTypes = {};

Dashboard.defaultProps = {};

export default Dashboard;
