import React from 'react';
import cn from 'classnames';

import styles from './styles.css';

const RoundImage = ({ className, url, alt }) => {
  return (
    <img className={cn(styles.roundImage, className)} src={url} alt={alt} />
  );
};

export default RoundImage;
