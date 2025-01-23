import React, { useState } from 'react';
import styles from './Dashboard.module.css';
import Card from '../Card/Card';
import { PieChart } from '../PieChart/PieChart';
import { pieChartData, polarAreaData, barChartData, lineDataSets } from '../../data/chartData';
import { PolarAreaChart } from '../PolarAreaChart/PolarAreaChart';
import GreetingCard from '../GreetingCard/GreetingCard';
import { BarChart } from '../BarChart/BarChart';
import { LineChart } from '../LineChart/LineChart';
import Tabs from '../Tabs/Tabs';
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import Button from '../Button/Button';

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
  const [showAnnotations, setShowAnnotations] = useState(false)
  return (
    <div className={styles.guide}>
      <Button onClick={() => setShowAnnotations(!showAnnotations)}>{showAnnotations ? 'Hide Notes' : 'Load Notes'}</Button>
      <Card className={styles.guideExcerptContainer} classNameInner={styles.guideExcerpt}>
        <p>
        <RoughNotationGroup show={showAnnotations}>
          <RoughNotation type="underline" color="var(--yellow)">"Don't Panic."</RoughNotation>
            And the first entry under the letter 'A' in the Guide is:
            A
            "A is for Apple. But more importantly, A is for Astrometrics, which is a very useful subject if you're going to be traveling around the universe. Unfortunately, it's also incredibly dull, so we'll skip that and move on to something more interesting."
            However, the most well-known entry from the Guide relates to  <RoughNotation strokeWidth="3" color="var(--purple" type="circle">Earth:</RoughNotation>
            <RoughNotation type="crossed-off" color="var(--red"> "Harmless."</RoughNotation>
            But in later editions, this was amended to:
            <RoughNotation type="underline" strokeWidth="6" color="var(--red)">"Mostly</RoughNotation> harmless."
        </RoughNotationGroup>

        </p>
      </Card>
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
