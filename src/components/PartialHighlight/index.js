import React from 'react';
import styles from './styles.css';

/**
 * Highlights part of the given text
 */
const PartialHighlight = ({ className, text, from = 1, to }) => {
  const words = text.split(' ');

  if (!from) {
    from = 1;
  }

  if (!to) {
    to = words.length;
  }

  const left = join(words, 0, from - 1);
  const highlight = join(words, from - 1, to);
  const right = join(words, to, words.length);

  return (
    <div className={className} data-testid={'PartialHighlight'}>
      <span>{left}</span>
      <span className={styles.highlight}>{highlight}</span>
      <span>{right}</span>
    </div>
  );
};

const join = (words, from, to) => {
  return words.slice(from, to).join(' ') + ' ';
};

export default PartialHighlight;
