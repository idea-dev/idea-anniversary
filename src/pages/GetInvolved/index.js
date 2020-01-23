import React from 'react';
import cn from 'classnames';
import { useQuery } from '@apollo/react-hooks';

import { GET_INVOLVED_QUERY } from '../../queries';
import BasicCopy from '../../components/BasicCopy';
import CTA from '../../components/CTA';
import asPage from '../../hocs/asPage';
import styles from './styles.css';

/**
 * How to get involved with IDEA?
 */
const GetInvolved = ({ className }) => {
  const { loading, error, data } = useQuery(GET_INVOLVED_QUERY);

  if (loading || error) return null;

  const {
    getContent: {
      getInvolved: {
        title,
        description,
        asset: { sourceUrl },
        link,
      },
    },
  } = data;

  const video = (
    <video width="100%" height="100%" controls>
      <source src={sourceUrl} type="video/mp4" />
    </video>
  );

  const cta = <CTA className={styles.link} link={link} text={'Learn More'} />;

  return (
    <BasicCopy
      title={title}
      description={description}
      asset={video}
      cta={cta}
    />
  );
};

export default asPage(GetInvolved);
