import React from 'react';
import cn from 'classnames';
import styles from './styles.css';

const CTA = ({ className, text, link }) => {
  return (
    <a className={cn(styles.link, className)} href={link} target={'_blank'}>
      {text}
    </a>
  );
};

export default CTA;
