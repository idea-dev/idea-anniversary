import React from 'react';
import cn from 'classnames';
import styles from './styles.css';

/**
 * Ten logo
 */
const Ten = ({ className }) => {
  return (
    <div className={cn(styles.ten, className)} data-testid={'Ten'}>
      <span>1</span>
      <span className={styles.zero}>O</span>
    </div>
  );
};

export default Ten;
