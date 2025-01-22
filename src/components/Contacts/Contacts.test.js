import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Contacts from './Contacts';

describe('<Contacts />', () => {
  test('it should mount', () => {
    render(<Contacts />);

    const contacts = screen.getByTestId('Contacts');

    expect(contacts).toBeInTheDocument();
  });
});