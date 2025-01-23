import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Bounties from './Bounties';

describe('<Bounties />', () => {
  test('it should mount', () => {
    render(<Bounties />);

    const bounties = screen.getByTestId('Bounties');

    expect(bounties).toBeInTheDocument();
  });
});