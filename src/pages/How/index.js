import React from 'react';
import cn from 'classnames';
import { useQuery } from '@apollo/react-hooks';

import HowStep from '../../components/HowStep';
import { HOW_QUERY } from '../../queries';
import asPage from '../../hocs/asPage';

import styles from './styles.css';

/**
 * How does IDEA do what it does?
 */
const How = ({ className }) => {
  const { loading, error, data } = useQuery(HOW_QUERY);

  if (loading || error) return null;

  const {
    getContent: {
      how: { title, steps },
    },
  } = data;

  return (
    <div className={cn(styles.how, className)}>
      <div className={styles.title}>{title}</div>
      {steps.map(({ name, description, icon }) => (
        <HowStep
          className={styles.howStep}
          name={name}
          description={description}
          icon={icon.sourceUrl}
          key={name}
        />
      ))}
    </div>
  );
};

export default asPage(How, false);
