import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactCard from './BountyCard';

describe('<ContactCard />', () => {
  test('it should mount', () => {
    render(<ContactCard />);

    const contactCard = screen.getByTestId('ContactCard');

    expect(contactCard).toBeInTheDocument();
  });
});