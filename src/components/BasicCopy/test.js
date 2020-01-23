import React from 'react';
import { render } from '@testing-library/react';

import BasicCopy from '.';

describe('BasicCopy', () => {
  const props = {
    title: 'We are IDEA',
    description: 'We are a venture accelerator',
    asset: 'www.idea.com',
  };

  it('renders', () => {
    const { getByTestId } = render(<BasicCopy {...props} />);
    expect(getByTestId('BasicCopy')).toBeInTheDocument();
  });

  it('renders title, description, and asset', () => {
    const { getByText, getByTestId, container } = render(
      <BasicCopy {...props} />,
    );

    expect(getByTestId('PartialHighlight')).toBeInTheDocument();
    expect(getByText(props.description)).toBeInTheDocument();
    expect(
      container.querySelector(`img[src='${props.asset}']`),
    ).toBeInTheDocument();
  });
});
