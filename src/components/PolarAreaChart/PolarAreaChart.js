import React from 'react';
import styles from './PolarAreaChart.module.css';

import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const PolarAreaChart = ({ data }) => {
  return <PolarArea className={styles.PolarAreaChart} data={data} />;
}
