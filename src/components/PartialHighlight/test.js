import React from 'react';
import { render } from '@testing-library/react';

import PartialHighlight from '.';

describe('PartialHighlight', () => {
  const props = {
    text: `We are Northeastern's IDEA`,
    from: 2,
    to: 3,
  };

  it('renders', () => {
    const { getByTestId } = render(<PartialHighlight {...props} />);
    expect(getByTestId('PartialHighlight')).toBeInTheDocument();
  });

  it('renders left, highlight, and right', () => {
    const { getByText } = render(<PartialHighlight {...props} />);
    expect(getByText('We')).toBeInTheDocument();
    expect(getByText(`are Northeastern's`)).toBeInTheDocument();
    expect(getByText(`IDEA`)).toBeInTheDocument();
  });

  it('renders empty left', () => {
    const { getByText } = render(
      <PartialHighlight {...props} from={1} to={2} />,
    );
    expect(getByText('We are')).toBeInTheDocument();
    expect(getByText(`Northeastern's IDEA`)).toBeInTheDocument();
  });

  it('renders empty right when to is not given', () => {
    const { getByText } = render(
      <PartialHighlight {...props} from={2} to={null} />,
    );
    expect(getByText('We')).toBeInTheDocument();
    expect(getByText(`are Northeastern's IDEA`)).toBeInTheDocument();
  });

  it('renders empty right when to is not given', () => {
    const { getByText } = render(
      <PartialHighlight {...props} from={2} to={null} />,
    );
    expect(getByText('We')).toBeInTheDocument();
    expect(getByText(`are Northeastern's IDEA`)).toBeInTheDocument();
  });

  it('renders no highlight if invalid from and to', () => {
    const { getByText } = render(<PartialHighlight {...props} from={10} />);
    expect(getByText(props.text)).toBeInTheDocument();
  });

  it('renders all in highlight if from and to specify entire string', () => {
    const { getByText } = render(
      <PartialHighlight {...props} from={1} to={10} />,
    );
    expect(getByText(props.text)).toBeInTheDocument();
  });
});
