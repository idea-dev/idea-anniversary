import React from 'react';
import cn from 'classnames';
import { useQuery } from '@apollo/react-hooks';

import { KEY_RESOURCE_QUERY } from '../../queries';
import KeyResourceAnimation from '../../components/KeyResourceAnimation';
import asPage from '../../hocs/asPage';
import styles from './styles.css';

const KeyResource = ({ className }) => {
  const { loading, error, data } = useQuery(KEY_RESOURCE_QUERY);

  if (loading || error) return null;

  const {
    getContent: {
      keyResource: { title, testimonials },
    },
  } = data;

  const extractedTestimonials = testimonials.map(
    ({ testimonial }) => testimonial,
  );

  return (
    <div className={cn(styles.keyResource, className)}>
      <div className={styles.title}>{title}</div>
      <KeyResourceAnimation testimonials={extractedTestimonials} />
    </div>
  );
};

export default asPage(KeyResource);
