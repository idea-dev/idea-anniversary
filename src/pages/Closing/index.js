import React from 'react';
import cn from 'classnames';
import { useQuery } from '@apollo/react-hooks';

import { CLOSING_QUERY } from '../../queries';
import Ten from '../../components/Ten';
import asPage from '../../hocs/asPage';

import styles from './styles.css';

/**
 * Closing end page
 */
const Closing = ({ className }) => {
  const { loading, error, data } = useQuery(CLOSING_QUERY);

  if (loading || error) return null;

  const {
    getContent: {
      closing: {
        title,
        background: { sourceUrl },
      },
    },
  } = data;

  return (
    <div
      className={cn(styles.closing, className)}
      style={{ backgroundImage: `url(${sourceUrl})` }}
      data-testid={'Closing'}
    >
      <div className={styles.tint}>
        <Ten className={styles.ten} />
        <div className={styles.title}>{title}</div>
      </div>
    </div>
  );
};

export default asPage(Closing);
