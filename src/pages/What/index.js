import React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { WHAT_QUERY } from '../../queries';

import BasicCopy, { Image } from '../../components/BasicCopy';
import CTA from '../../components/CTA';
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
        link,
      },
    },
  } = data;

  console.log(data)
  const cta = <CTA className={styles.link} link={link} text={'Register For 10 Year Event'} />;

  return (
    <BasicCopy
      title={title}
      description={description}
      asset={<Image src={sourceUrl} />}
      highlightFrom={highlightFrom}
      highlightTo={highlightTo}
      cta={cta}
    />
  );
};

export default What;
