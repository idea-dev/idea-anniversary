import React, { Fragment } from 'react';

import { render } from '@testing-library/react';

import PageOverlap from '.';

describe('PageOverlap', () => {
  const texts = ['Hello', 'World'];
  const children = texts.map((text) => <div key={text}>{text}</div>);

  it('renders', () => {
    const { getByTestId } = render(<PageOverlap>{children}</PageOverlap>);
    expect(getByTestId('PageOverlap')).toBeInTheDocument();
  });

  it('renders all children', () => {
    const { getByText } = render(<PageOverlap>{children}</PageOverlap>);
    texts.forEach((text) => {
      expect(getByText(text)).toBeInTheDocument();
    });
  });

  it('renders single child', () => {
    const { getByText } = render(
      <PageOverlap>
        <div>{texts[0]}</div>
      </PageOverlap>,
    );

    expect(getByText(texts[0])).toBeInTheDocument();
  });
});
