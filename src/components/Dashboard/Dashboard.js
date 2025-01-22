import React from 'react';
import styles from './Dashboard.module.css';
import Card from '../Card/Card';
import { PieChart } from '../PieChart/PieChart';
import { pieChartData, polarAreaData, barChartData, lineDataSets } from '../../data/chartData';
import { PolarAreaChart } from '../PolarAreaChart/PolarAreaChart';
import GreetingCard from '../GreetingCard/GreetingCard';
import { BarChart } from '../BarChart/BarChart';
import { LineChart } from '../LineChart/LineChart';
import Tabs from '../Tabs/Tabs';

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

const tabData = [
  { tabName: 'reports', tabTitle: 'Reports', tabContentComponent: Reports },
  { tabName: 'guide', tabTitle: 'Guide', tabContentComponent: Guide },
];

const Dashboard = () => (
  <Tabs data={tabData} />
);

Dashboard.propTypes = {};

Dashboard.defaultProps = {};

export default Dashboard;
