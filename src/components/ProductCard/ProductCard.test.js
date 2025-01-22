import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductCard from './ProductCard';

describe('<ProductCard />', () => {
  test('it should mount', () => {
    render(<ProductCard />);

    const productCard = screen.getByTestId('ProductCard');

    expect(productCard).toBeInTheDocument();
  });
});