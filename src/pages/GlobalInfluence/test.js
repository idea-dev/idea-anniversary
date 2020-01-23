import React from 'react';
import { render, wait } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';

import { GLOBAL_INFLUENCE_QUERY } from '../../queries';
import GlobalInfluence from '.';

describe('GlobalInfluence', () => {
  const title = 'Our impact over the world';

  const mocks = [
    {
      request: {
        query: GLOBAL_INFLUENCE_QUERY,
      },
      result: {
        data: {
          getContent: {
            globalInfluence: {
              title,
              background: { sourceUrl: null },
            },
          },
        },
      },
    },
  ];

  it('renders', async () => {
    const { getByTestId } = render(
      <MockedProvider addTypename={false} mocks={mocks}>
        <GlobalInfluence />
      </MockedProvider>,
    );

    await wait(() => {
      expect(getByTestId('GlobalInfluence')).toBeInTheDocument();
    });
  });

  it('renders title', async () => {
    const { getByText } = render(
      <MockedProvider addTypename={false} mocks={mocks}>
        <GlobalInfluence />
      </MockedProvider>,
    );

    await wait(() => {
      expect(getByText(title)).toBeInTheDocument();
    });
  });
});
