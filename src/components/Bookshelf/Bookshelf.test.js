import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Bookshelf from './Bookshelf';

describe('<Bookshelf />', () => {
  test('it should mount', () => {
    render(<Bookshelf />);

    const bookshelf = screen.getByTestId('Bookshelf');

    expect(bookshelf).toBeInTheDocument();
  });
});