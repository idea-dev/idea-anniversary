import React from 'react';
import cn from 'classnames';
import { useQuery } from '@apollo/react-hooks';

import { FIRST_QUOTE_QUERY } from '../../queries';
import FeaturedQuote from '../FeaturedQuote';

import styles from './styles.css';

/**
 * First featured quote on the website.
 */
const FirstQuote = (props) => {
  const { loading, error, data } = useQuery(FIRST_QUOTE_QUERY);

  if (loading || error) return null;

  const {
    getContent: {
      firstQuote: {
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

export default FirstQuote;
