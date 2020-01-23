import React from 'react';
import cn from 'classnames';

import PartialHighlight from '../../components/PartialHighlight';
import asPage from '../../hocs/asPage';
import styles from './styles.css';

/**
 * Basic page with title, description, and asset arranged horizontally
 * with the option to reverse the order.
 */
const BasicCopy = ({
  className,
  title,
  description,
  asset,
  reversed = false,
  cta,
  highlightFrom,
  highlightTo,
}) => {
  const lineStyle = reversed ? styles.right : styles.left;

  return (
    <div
      className={cn(
        styles.basicCopy,
        { [styles.reversed]: reversed },
        className,
      )}
      data-testid={'BasicCopy'}
    >
      <div className={cn(styles.copy, { [styles.reversed]: reversed })}>
        <PartialHighlight
          className={cn(styles.title, lineStyle)}
          text={title}
          from={highlightFrom}
          to={highlightTo}
        />
        <p>{description}</p>
        {cta}
      </div>

      <div className={styles.asset}>{asset}</div>
    </div>
  );
};

export const Image = ({ src }) => <img className={styles.image} src={src} />;

export default asPage(BasicCopy);
