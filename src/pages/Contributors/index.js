import React from 'react';
import cn from 'classnames';
import { useQuery } from '@apollo/react-hooks';

import { CONTRIBUTORS_QUERY } from '../../queries';
import asPage from '../../hocs/asPage';
import styles from './styles.css';

/**
 * List of general contributors to IDEA
 */
const Contributors = ({ className }) => {
  const { loading, error, data } = useQuery(CONTRIBUTORS_QUERY);

  if (loading || error) return null;

  const {
    getContent: {
      contributors: { title, contributors },
    },
  } = data;

  return (
    <div className={cn(styles.contributors, className)}>
      <div className={styles.contributorsParagraph}>{contributors}</div>
      <div className={styles.title}>{title}</div>
    </div>
  );
};

export default asPage(Contributors);
