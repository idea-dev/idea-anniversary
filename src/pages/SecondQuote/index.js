import React from 'react';
import cn from 'classnames';
import { useQuery } from '@apollo/react-hooks';

import { SECOND_QUOTE_QUERY } from '../../queries';
import FeaturedQuote from '../FeaturedQuote';

/**
 * Second featured quote on the website.
 */
const SecondQuote = (props) => {
  const { loading, error, data } = useQuery(SECOND_QUOTE_QUERY);

  if (loading || error) return null;

  const {
    getContent: {
      secondQuote: {
        quote,
        name,
        title,
        background: { sourceUrl },
      },
    },
  } = data;

  return (
    <FeaturedQuote
      quote={quote}
      name={name}
      title={title}
      background={sourceUrl}
    />
  );
};

export default SecondQuote;