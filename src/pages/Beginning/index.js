import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { BEGINNING_QUERY } from '../../queries';

import BasicCopy, { Image } from '../../components/BasicCopy';
import styles from './styles.css';

/**
 * How IDEA started
 */
const Beginning = (props) => {
  const { loading, error, data } = useQuery(BEGINNING_QUERY);

  if (loading || error) return null;

  const {
    getContent: {
      beginning: {
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
      highlightTo={highlightTo}
      highlightFrom={highlightFrom}
    />
  );
};

export default Beginning;
