import React from 'react';
import cn from 'classnames';
import { useQuery } from '@apollo/react-hooks';

import { DIVERSITY_QUERY } from '../../queries';
import asPage from '../../hocs/asPage';
import styles from './styles.css';

/**
 * Diversity page
 */
const Diversity = ({ className }) => {
  const { loading, error, data } = useQuery(DIVERSITY_QUERY);

  if (loading || error) return null;

  const {
    getContent: {
      diversity: {
        title,
        asset: { sourceUrl },
      },
    },
  } = data;

  return (
    <div className={cn(styles.diversity, className)}>
      <div className={styles.title}>{title}</div>
      <img className={styles.asset} src={sourceUrl} />
    </div>
  );
};

export default asPage(Diversity, false);
