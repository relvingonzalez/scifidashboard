import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Bounties from './Bounties';

describe('<Contacts />', () => {
  test('it should mount', () => {
    render(<Bounties />);

    const contacts = screen.getByTestId('Bounties');

    expect(contacts).toBeInTheDocument();
  });
});