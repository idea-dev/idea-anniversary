import React from 'react';
import cn from 'classnames';
import styles from './styles.css';

/**
 * Each step in the How process.
 */
const HowStep = ({ className, name, description, icon }) => {
  return (
    <div className={cn(styles.howStep, className)}>
      <div className={styles.name}>
        {name}

        <img className={styles.icon} src={icon} alt={name} />
      </div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};

export default HowStep;
