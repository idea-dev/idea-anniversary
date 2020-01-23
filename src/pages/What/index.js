import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { WHAT_QUERY } from '../../queries';

import BasicCopy, { Image } from '../../components/BasicCopy';
import styles from './styles.css';

/**
 * What is IDEA?
 */
const What = (props) => {
  const { loading, error, data } = useQuery(WHAT_QUERY);

  if (loading || error) return null;

  const {
    getContent: {
      what: {
        title,
        description,
        asset: { sourceUrl },
        highlightTo,
        highlightFrom,
      },
    },
  } = data;

  return (
    <BasicCopy
      title={title}
      description={description}
      asset={<Image src={sourceUrl} />}
      highlightFrom={highlightFrom}
      highlightTo={highlightTo}
    />
  );
};

export default What;
