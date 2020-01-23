import React from 'react';
import cn from 'classnames';

import asPage from '../../hocs/asPage';
import CTA from '../../components/CTA';
import styles from './styles.css';

const MilestonePage = ({
  className,
  title,
  description,
  link,
  asset,
  onExit,
}) => {
  return (
    <div className={cn(styles.milestonePage, className)}>
      <div className={styles.copy}>
        <div className={styles.title}>{title}</div>
        <p>{description}</p>

        {link && <CTA text={'Learn More'} link={link} />}
      </div>

      <img className={styles.asset} src={asset} />

      <button className={styles.exit} onClick={onExit}>
        <i className={cn('fas', 'fa-times')} />
      </button>
    </div>
  );
};

export default asPage(MilestonePage);
