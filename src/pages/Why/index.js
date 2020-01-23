import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { WHY_QUERY } from '../../queries';

import BasicCopy, { Image } from '../../components/BasicCopy';

/**
 * Why does IDEA do what they do?
 */
const Why = (props) => {
  const { loading, error, data } = useQuery(WHY_QUERY);

  if (loading || error) return null;

  const {
    getContent: {
      why: {
        title,
        description,
        asset: { sourceUrl },
        highlightFrom,
        highlightTo,
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
      reversed
    />
  );
};

export default Why;
