import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import GreetingCard from './GreetingCard';

describe('<GreetingCard />', () => {
  test('it should mount', () => {
    render(<GreetingCard />);

    const greetingCard = screen.getByTestId('GreetingCard');

    expect(greetingCard).toBeInTheDocument();
  });
});