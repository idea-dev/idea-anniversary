import React from 'react';
import { render } from '@testing-library/react';

import Statistics from '.';

describe('Statistics', () => {
  const props = {
    title: 'The numbers show',
    statistics: [
      { number: '180M', description: 'Funding Received' },
      { number: '200+', description: 'Students involved' },
    ],
  };

  it('renders', () => {
    const { getByTestId } = render(<Statistics {...props} />);
    expect(getByTestId('Statistics'));
  });

  it('renders title', () => {
    const { getByText } = render(<Statistics {...props} />);
    expect(getByText(props.title));
  });

  it('renders all statistics', () => {
    const { getByText } = render(<Statistics {...props} />);

    props.statistics.forEach(({ number, description }) => {
      expect(getByText(number)).toBeInTheDocument();
      expect(getByText(description)).toBeInTheDocument();
    });
  });
});
