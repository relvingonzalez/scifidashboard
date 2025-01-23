import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BountyList from './BountyList';

describe('<BountyList />', () => {
  test('it should mount', () => {
    render(<BountyList />);

    const bountyList = screen.getByTestId('BountyList');

    expect(bountyList).toBeInTheDocument();
  });
});