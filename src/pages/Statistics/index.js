import React from 'react';
import cn from 'classnames';
import { useQuery } from '@apollo/react-hooks';

import asPage from '../../hocs/asPage';
import { FUNDING_STATISTICS_QUERY } from '../../queries';
import styles from './styles.css';

/**
 * Fundraising statistics page
 */
const Statistics = ({ className, title, statistics }) => {
  return (
    <div
      className={cn(styles.fundingStatistics, className)}
      data-testid={'Statistics'}
    >
      <div className={styles.title}>{title}</div>
      <div className={styles.statisticsContainer}>
        {statistics.map((stats, index) => (
          <StatisticsBlock {...stats} key={index} />
        ))}
      </div>
    </div>
  );
};

const StatisticsBlock = ({ className, number, description }) => {
  return (
    <div className={cn(styles.statisticsBlock, className)}>
      <div className={styles.number}>{number}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};

export default asPage(Statistics);
