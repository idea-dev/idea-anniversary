import React from 'react';
import { render } from '@testing-library/react';

import FeaturedQuote from '.';

describe('FeaturedQuote', () => {
  const props = {
    quote: 'I am Sir Aoun. I is crown jewel of NEU',
    name: 'Sir Aoun',
    title: 'President of Northeastern University',
  };

  it('renders', () => {
    const { getByTestId } = render(<FeaturedQuote />);
    expect(getByTestId('FeaturedQuote')).toBeInTheDocument();
  });

  it('renders quote, name, and title', () => {
    const { getByText } = render(<FeaturedQuote {...props} />);
    expect(getByText(props.quote)).toBeInTheDocument();
    expect(getByText(props.name)).toBeInTheDocument();
    expect(getByText(props.title)).toBeInTheDocument();
  });
});
