import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Counter } from './Counter';

describe('Counter', () => {
  const renderComponent = () => render(<Counter />);

  it('increments', () => {
    const { getByText } = renderComponent();
    const incrementButton = getByText('Increment');

    expect(getByText('0')).toBeInTheDocument();
    fireEvent.click(incrementButton);
    expect(getByText('1')).toBeInTheDocument();
  });

  it('decrements', () => {
    const { getByText } = renderComponent();
    const decrementButton = getByText('Decrement');

    expect(getByText('0')).toBeInTheDocument();
    fireEvent.click(decrementButton);
    expect(getByText('-1')).toBeInTheDocument();
  });

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