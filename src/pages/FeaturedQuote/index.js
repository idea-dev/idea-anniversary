import React from 'react';
import cn from 'classnames';
import asPage from '../../hocs/asPage';

import styles from './styles.css';

/**
 * Page featuring a quote.
 */
const FeaturedQuote = ({ className, quote, name, title, background }) => {
  return (
    <div
      className={cn(styles.featuredQuote, className)}
      style={{ backgroundImage: `url(${background})` }}
      data-testid={'FeaturedQuote'}
    >
      <div className={styles.tint}>
        <div className={styles.quote}>{quote}</div>
        <div className={styles.quoteSource}>
          <div className={styles.name}>{name}</div>
          <div>{title}</div>
        </div>
      </div>
    </div>
  );
};

export default asPage(FeaturedQuote);
