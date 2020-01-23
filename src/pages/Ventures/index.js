import React from 'react';
import { chunk } from 'lodash';
import cn from 'classnames';
import { useQuery } from '@apollo/react-hooks';

import { VENTURES_QUERY } from '../../queries';
import asPage from '../../hocs/asPage';
import styles from './styles.css';

/**
 * Featured ventures.
 */
const Ventures = ({ className }) => {
  const { loading, error, data } = useQuery(VENTURES_QUERY);

  if (loading || error) return null;

  const {
    getContent: {
      ventures: { title, ventures },
    },
  } = data;

  const halfBound = Math.max(4, Math.ceil(ventures.length / 2));
  const [firstHalf, secondHalf] = chunk(ventures, halfBound);

  return (
    <div className={cn(styles.ventures, className)}>
      <VentureRow ventures={firstHalf} />
      <div className={styles.title}>{title}</div>
      <VentureRow ventures={secondHalf} />
    </div>
  );
};

const VentureRow = ({ className, ventures }) => {
  return (
    <div className={styles.ventureRow}>
      {ventures.map(({ name, logo: { sourceUrl } }) => (
        <img
          className={styles.ventureLogo}
          src={sourceUrl}
          alt={name}
          key={name}
        />
      ))}
    </div>
  );
};

export default asPage(Ventures);
