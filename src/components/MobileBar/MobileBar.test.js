import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MobileBar from './MobileBar';

describe('<MobileBar />', () => {
  test('it should mount', () => {
    render(<MobileBar />);

    const mobileBar = screen.getByTestId('MobileBar');

    expect(mobileBar).toBeInTheDocument();
  });
});