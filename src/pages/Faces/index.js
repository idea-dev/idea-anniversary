import React from 'react';
import { chunk } from 'lodash';
import cn from 'classnames';
import StackGrid from 'react-stack-grid';
import { useQuery } from '@apollo/react-hooks';

import { FACES_QUERY } from '../../queries';
import asPage from '../../hocs/asPage';
import styles from './styles.css';

/*
 * Credit to of the CEOs of IDEA thus far.
 */
const Faces = ({ className }) => {
  const { loading, error, data } = useQuery(FACES_QUERY);

  if (loading || error) return null;

  const {
    getContent: {
      faces: { title, people },
    },
  } = data;

  const rowLength = Math.max(4, Math.ceil(people.length / 2));
  const chunks = chunk(people, rowLength);

  return (
    <div className={cn(styles.faces, className)}>
      <div className={styles.title}>{title}</div>

      <div>
        {chunks.map((row, index) => (
          <div className={styles.facesContainer} key={index}>
            {row.map(({ name, description, asset: { sourceUrl } }) => (
              <Face
                name={name}
                description={description}
                sourceUrl={sourceUrl}
                key={name}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const Face = ({ className, name, description, sourceUrl }) => {
  return (
    <div
      className={styles.face}
      style={{ backgroundImage: `url(${sourceUrl})` }}
    >
      <div className={styles.copy}>
        <div className={styles.name}>{name}</div>
        <div>{description}</div>
      </div>
    </div>
  );
};

export default asPage(Faces);
