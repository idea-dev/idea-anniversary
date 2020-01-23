import React from 'react';
import cn from 'classnames';
import { range } from 'lodash';
import styles from './styles.css';

/**
 * Ratio statistics represented by checked dots.
 */
const DotStatistics = ({ className, statistics }) => {
  const { numerator, denominator, description } = statistics;

  return (
    <div
      className={cn(styles.dotStatistics, className)}
      data-testid={'DotStatistics'}
    >
      <div className={styles.dots}>
        {range(denominator).map((index) => (
          <Dot checked={index < numerator} key={index} />
        ))}
      </div>

      <div className={styles.description}>{description}</div>
    </div>
  );
};

const Dot = ({ checked = false }) => {
  return (
    <div
      className={cn(styles.dot, { [styles.checked]: checked })}
      data-testid={checked ? 'Checked' : 'Unchecked'}
    />
  );
};

export default DotStatistics;
