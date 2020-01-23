import React from 'react';
import { render } from '@testing-library/react';

import DotStatistics from '.';

describe('DotStatistics', () => {
  const statistics = {
    numerator: 2,
    denominator: 5,
    description: '2 out of 5',
  };

  it('renders', () => {
    const { getByTestId } = render(
      <DotStatistics statistics={statistics}></DotStatistics>,
    );

    expect(getByTestId('DotStatistics')).toBeInTheDocument();
  });

  it('renders description', () => {
    const { getByText } = render(
      <DotStatistics statistics={statistics}></DotStatistics>,
    );

    expect(getByText(statistics.description)).toBeInTheDocument();
  });

  it('renders checked and unchecked', () => {
    const { getAllByTestId } = render(
      <DotStatistics statistics={statistics}></DotStatistics>,
    );

    const { numerator, denominator } = statistics;
    expect(getAllByTestId('Checked')).toHaveLength(numerator);
    expect(getAllByTestId('Unchecked')).toHaveLength(denominator - numerator);
  });
});
