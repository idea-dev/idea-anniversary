import React from 'react';
import cn from 'classnames';
import { useQuery } from '@apollo/react-hooks';

import { MILESTONES_QUERY } from '../../queries';
import BeforeAfter from '../BeforeAfter';
import MilestonePage from '../MilestonePage';
import asPage from '../../hocs/asPage';
import styles from './styles.css';

/**
 * IDEA milestones page
 */
const Milestones = ({ className, setOverlay }) => {
  const { loading, error, data } = useQuery(MILESTONES_QUERY);

  if (loading || error) return null;

  const {
    getContent: {
      milestones: { title, milestones },
    },
  } = data;

  return (
    <div className={cn(styles.milestones, className)}>
      <div className={styles.title}>{title}</div>
      <div className={styles.milestonesContainer}>
        {milestones.map((milestone, index) => (
          <Milestone {...milestone} setOverlay={setOverlay} key={index} />
        ))}
      </div>
    </div>
  );
};

const Milestone = ({
  className,
  setOverlay,
  title,
  description,
  link,
  assets,
}) => {
  const onExit = () => setOverlay(null);
  const sourceUrl = assets[0].asset.sourceUrl;
  const milestonePage =
    assets.length >= 2 ? (
      <BeforeAfter title={title} assets={assets} onExit={onExit} />
    ) : (
      <MilestonePage
        title={title}
        description={description}
        link={link}
        asset={assets[0].asset.sourceUrl}
        onExit={onExit}
      />
    );

  return (
    <div
      className={styles.milestone}
      style={{ backgroundImage: `url(${sourceUrl})` }}
      onClick={() => setOverlay(milestonePage)}
    >
      <div className={styles.copy}>
        <div className={styles.milestoneTitle}>{title}</div>
      </div>
    </div>
  );
};

export default asPage(Milestones);
