import React from 'react';
import { render, wait } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';

import What from '.';
import { WHAT_QUERY } from '../../queries';

describe('What', () => {
  const title = 'We are IDEA';
  const description = 'IDEA be venturing and accelerating';
  const sourceUrl = 'www.idea.com';

  const mocks = [
    {
      request: {
        query: WHAT_QUERY,
      },
      result: {
        data: {
          getContent: {
            what: {
              title,
              description,
              asset: { sourceUrl },
            },
          },
        },
      },
    },
  ];

  it('renders', async () => {
    const { getByTestId } = render(
      <MockedProvider addTypename={false} mocks={mocks}>
        <What />
      </MockedProvider>,
    );

    await wait(() => {
      expect(getByTestId('BasicCopy')).toBeInTheDocument();
    });
  });

  it('renders title, description, and asset', async () => {
    const { getByTestId, container } = render(
      <MockedProvider addTypename={false} mocks={mocks}>
        <What />
      </MockedProvider>,
    );

    await wait(() => {
      expect(getByTestId('BasicCopy')).toBeInTheDocument();
      expect(
        container.querySelector(`img[src='${sourceUrl}']`),
      ).toBeInTheDocument();
    });
  });
});
