import React from 'react';
import cn from 'classnames';
import ReactCompareImage from 'react-compare-image';

import asPage from '../../hocs/asPage';
import styles from './styles.css';

const BeforeAfter = ({ className, title, assets, onExit }) => {
  const first = assets[0].asset.sourceUrl;
  const second = assets[1].asset.sourceUrl;

  return (
    <div className={cn(styles.beforeAfter, className)}>
      <div className={styles.title}>{title}</div>

      <button className={styles.exit} onClick={onExit}>
        <i className={cn('fas', 'fa-times')} />
      </button>

      <div className={styles.compareImageContainer}>
        <ReactCompareImage
          leftImage={first}
          rightImage={second}
          sliderLineColor={'#E97A24'}
          sliderLineWidth={6}
          hover
        />
      </div>
    </div>
  );
};

export default asPage(BeforeAfter, false);
