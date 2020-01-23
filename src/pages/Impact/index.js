import React from 'react';
import cn from 'classnames';
import { useQuery } from '@apollo/react-hooks';

import asPage from '../../hocs/asPage';
import Statistics from '../../pages/Statistics';
import { IMPACT_QUERY } from '../../queries';
import styles from './styles.css';

/**
 * Impact statistics page
 */
const Impact = ({ className }) => {
  const { loading, error, data } = useQuery(IMPACT_QUERY);

  if (loading || error) return null;

  const {
    getContent: {
      impact: { title, statistics },
    },
  } = data;

  return <Statistics title={title} statistics={statistics} />;
};

export default asPage(Impact);
