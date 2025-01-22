import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PolarAreaChart from './PolarAreaChart';

describe('<PolarAreaChart />', () => {
  test('it should mount', () => {
    render(<PolarAreaChart />);

    const polarAreaChart = screen.getByTestId('PolarAreaChart');

    expect(polarAreaChart).toBeInTheDocument();
  });
});