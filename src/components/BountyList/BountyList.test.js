import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactList from './BountyList';

describe('<ContactList />', () => {
  test('it should mount', () => {
    render(<ContactList />);

    const contactList = screen.getByTestId('ContactList');

    expect(contactList).toBeInTheDocument();
  });
});