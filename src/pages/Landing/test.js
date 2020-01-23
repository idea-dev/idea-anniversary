import React from 'react';
import { render, wait } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';

import Landing from '.';
import { LANDING_PAGE_QUERY } from '../../queries';

describe('Landing', () => {
  const title = 'Years of IDEA';

  const mocks = [
    {
      request: {
        query: LANDING_PAGE_QUERY,
      },
      result: {
        data: {
          getContent: {
            landing: {
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
        <Landing />
      </MockedProvider>,
    );

    await wait(() => {
      expect(getByTestId('Landing')).toBeInTheDocument();
    });
  });

  it('renders title', async () => {
    const { getByText } = render(
      <MockedProvider addTypename={false} mocks={mocks}>
        <Landing />
      </MockedProvider>,
    );

    await wait(() => {
      expect(getByText(title)).toBeInTheDocument();
    });
  });

  it('renders Ten symbol', async () => {
    const { getByTestId } = render(
      <MockedProvider addTypename={false} mocks={mocks}>
        <Landing />
      </MockedProvider>,
    );

    await wait(() => {
      expect(getByTestId('Ten')).toBeInTheDocument();
    });
  });
});
