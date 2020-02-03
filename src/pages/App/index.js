import React, { useState } from 'react';

import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient, { InMemoryCache } from 'apollo-boost';

import Landing from '../Landing';
import What from '../What';
import Why from '../Why';
import How from '../How';
import KeyResource from '../KeyResource';
import Industries from '../Industries';
import Ventures from '../Ventures';
import FirstQuote from '../FirstQuote';
import Beginning from '../Beginning';
import FundingStatistics from '../FundingStatistics';
import SecondQuote from '../SecondQuote';
import GlobalInfluence from '../GlobalInfluence';
import Faces from '../Faces';
import Milestones from '../Milestones';
import Impact from '../Impact';
import Mosaic from '../Mosaic';
import Diversity from '../Diversity';
import Contributors from '../Contributors';
import GetInvolved from '../GetInvolved';
import Closing from '../Closing';

import styles from './styles.css';

const client = new ApolloClient({
  uri: process.env.TAKESHAPE_GRAPHQL_URL,

  cache: new InMemoryCache({
    addTypename: false,
  }),

  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.TAKESHAPE_API_KEY}`,
  },
});

/**
 * Entrypoint component that holds all global
 */
const App = () => {
  const [overlay, setOverlay] = useState(null);

  return (
    <ApolloProvider client={client}>
      {overlay && <div className={styles.overlayPage}>{overlay}</div>}

      <div className={styles.app}>
        <Landing />
        <What />
        <Why />
        <How />
        <KeyResource />
        <Industries />
        <Ventures />
        <FirstQuote />
        <Beginning />
        <FundingStatistics />
        <SecondQuote />
        <GlobalInfluence />
        <Milestones setOverlay={setOverlay} />
        <Impact />
        <Mosaic />
        <Diversity />
        <Faces />
        {/* <Contributors /> */}
        <GetInvolved />
        <Closing />
      </div>
    </ApolloProvider>
  );
};

export default App;
