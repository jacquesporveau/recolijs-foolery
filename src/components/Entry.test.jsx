import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Entry } from './Entry';

describe('Entry', () => {
  const renderComponent = () => render(<Entry />);

  it('increments and decrements', () => {
    const { getByText } = renderComponent();
    const incrementButton = getByText('Increment');
    const decrementButton = getByText('Decrement');

    expect(getByText('0')).toBeInTheDocument();
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    fireEvent.click(decrementButton);
    expect(getByText('1')).toBeInTheDocument();
  });
});