import React from 'react';
import cn from 'classnames';
import { useQuery } from '@apollo/react-hooks';

import { GLOBAL_INFLUENCE_QUERY } from '../../queries';
import asPage from '../../hocs/asPage';

import styles from './styles.css';

/**
 * IDEA's global influence
 */
const GlobalInfluence = ({ className }) => {
  const { loading, error, data } = useQuery(GLOBAL_INFLUENCE_QUERY);

  if (loading || error) return null;

  const {
    getContent: {
      globalInfluence: {
        title,
        background: { sourceUrl },
      },
    },
  } = data;

  return (
    <div
      className={cn(styles.globalInfluence, className)}
      style={{ backgroundImage: `url(${sourceUrl})` }}
      data-testid={'GlobalInfluence'}
    >
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default asPage(GlobalInfluence);
