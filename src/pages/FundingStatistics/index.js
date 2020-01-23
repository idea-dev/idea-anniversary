import React from 'react';
import cn from 'classnames';
import { useQuery } from '@apollo/react-hooks';

import asPage from '../../hocs/asPage';
import Statistics from '../../pages/Statistics';
import { FUNDING_STATISTICS_QUERY } from '../../queries';
import styles from './styles.css';

/**
 * Fundraising statistics page
 */
const FundingStatistics = ({ className }) => {
  const { loading, error, data } = useQuery(FUNDING_STATISTICS_QUERY);

  if (loading || error) return null;

  const {
    getContent: {
      fundingStatistics: { title, statistics },
    },
  } = data;

  return <Statistics title={title} statistics={statistics} />;
};

export default asPage(FundingStatistics);
