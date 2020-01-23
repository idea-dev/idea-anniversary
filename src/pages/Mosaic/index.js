import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { MOSAIC_QUERY } from '../../queries';

import BasicCopy, { Image } from '../../components/BasicCopy';
import styles from './styles.css';

/**
 * Mosaic page
 */
const Mosaic = (props) => {
  const { loading, error, data } = useQuery(MOSAIC_QUERY);

  if (loading || error) return null;

  const {
    getContent: {
      mosaic: {
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

export default Mosaic;
