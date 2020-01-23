import React from 'react';
import cn from 'classnames';
import { useQuery } from '@apollo/react-hooks';

import { LANDING_PAGE_QUERY } from '../../queries';
import Ten from '../../components/Ten';
import asPage from '../../hocs/asPage';

import scrollGif from '../../assets/scroll.gif';
import styles from './styles.css';

/**
 * Landing page
 */
const Landing = ({ className }) => {
  const { loading, error, data } = useQuery(LANDING_PAGE_QUERY);

  if (loading || error) return null;

  const {
    getContent: {
      landing: {
        title,
        background: { sourceUrl },
      },
    },
  } = data;

  return (
    <div
      className={cn(styles.landing, className)}
      style={{ backgroundImage: `url(${sourceUrl})` }}
      data-testid={'Landing'}
    >
      <div className={styles.tint}>
        <Ten className={styles.ten} />
        <div className={styles.title}>{title}</div>
        <img className={styles.scrollGif} src={scrollGif} />
      </div>
    </div>
  );
};

export default asPage(Landing);
