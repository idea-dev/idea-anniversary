import React from 'react';
import cn from 'classnames';

import asPage from '../../hocs/asPage';
import styles from './styles.css';

/**
 * Overlap multiple children in the same page.
 */
const PageOverlap = ({ className, children, dataTestId }) => {
  const getChildren = () => {
    return Array.isArray(children) ? children : [children];
  };

  return (
    <div className={cn(className)} data-testid={dataTestId || 'PageOverlap'}>
      {getChildren().map((child, index) => (
        <div className={styles.overlap} key={index}>
          {child}
        </div>
      ))}
    </div>
  );
};

export default asPage(PageOverlap);
