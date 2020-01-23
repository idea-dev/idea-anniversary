import React, { useEffect } from 'react';
import cn from 'classnames';

import styles from './styles.css';

/**
 * Higher order component for initializing pages with full height,
 * providing API for setting document title
 *
 * asPage will revert document title when component is unmounted.
 *
 * @param {*} $component component to render
 */
const asPage = ($component, max = true) => {
  return (props) => {
    const documentTitle = process.env.DOCUMENT_TITLE;

    useEffect(() => {
      return resetTitle;
    }, []);

    const setDocumentTitle = (title) => {
      if (!title) {
        resetTitle();
      } else {
        document.title = `${documentTitle} | ${title}`;
      }
    };

    const resetTitle = () => (document.title = documentTitle);

    return (
      <$component
        className={cn(styles.page, { [styles.max]: max }, props.className)}
        setDocumentTitle={setDocumentTitle}
        {...props}
      />
    );
  };
};

export default asPage;
