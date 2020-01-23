import React from 'react';
import cn from 'classnames';
import { useQuery } from '@apollo/react-hooks';

import { INDUSTRIES_QUERY } from '../../queries';
import BubbleChart from '../../components/BubbleChart';
import asPage from '../../hocs/asPage';
import styles from './styles.css';

/**
 * Ventures by industries
 */
const Industries = ({ className }) => {
  const { loading, error, data } = useQuery(INDUSTRIES_QUERY);

  if (loading || error) return null;

  const {
    getContent: {
      industries: { title, industries },
    },
  } = data;

  return (
    <div className={cn(styles.industries, className)}>
      <div className={styles.title}>{title}</div>
      <BubbleChart className={styles.bubbleChart} data={industries} />
    </div>
  );
};

export default asPage(Industries);
