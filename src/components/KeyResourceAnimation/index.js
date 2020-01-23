import React from 'react';
import { fill, random } from 'lodash';
import cn from 'classnames';
import { times } from 'lodash';

import asPage from '../../hocs/asPage';
import styles from './styles.css';

/**
 * Plus sign animation for Key Resource page.
 */
const KeyResourceAnimation = ({ className, testimonials = [] }) => {
  const rowCounts = [12, 11, 13, 12, 11, 12, 11, 12, 13, 11, 12, 13];
  const testimonialSpots = fill(
    Array(rowCounts.length),
    undefined,
  ).map(() => []);

  testimonials.forEach((testimonial) => {
    const rand = random(0, testimonialSpots.length - 1);
    testimonialSpots[rand].push(testimonial);
  });

  return (
    <div className={cn(styles.keyResourceAnimation, className)}>
      {rowCounts.map((count, index) => {
        return (
          <PlusRow
            count={count}
            testimonials={testimonialSpots[index]}
            key={index}
          />
        );
      })}
    </div>
  );
};

const PlusRow = ({ count, testimonials }) => {
  const plusSeries = times(count, () => <Plus />);
  const orangePlus = (testimonial, index) => (
    <Plus
      className={styles.orange}
      testimonial={testimonial}
      offset={index < count / 2}
    />
  );

  testimonials.forEach((testimonial) => {
    const rand = random(0, plusSeries.length - 1);
    plusSeries[rand] = orangePlus(testimonial, rand);
  });

  return <div className={styles.plusRow}>{plusSeries}</div>;
};

const Plus = ({ className, testimonial, offset }) => {
  return (
    <div className={cn(styles.plus, className)}>
      <i className={cn('fas', 'fa-plus', styles.fa)} />
      {testimonial && (
        <div className={cn(styles.testimonial, { [styles.offset]: offset })}>
          {testimonial}
        </div>
      )}
    </div>
  );
};

export default asPage(KeyResourceAnimation);
