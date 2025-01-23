import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BountyCard from './BountyCard';

describe('<BountyCard />', () => {
  test('it should mount', () => {
    render(<BountyCard />);

    const contactCard = screen.getByTestId('BountyCard');

    expect(contactCard).toBeInTheDocument();
  });
});