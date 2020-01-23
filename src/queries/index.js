import { gql } from 'apollo-boost';

export const LANDING_PAGE_QUERY = gql`
  {
    getContent {
      landing {
        title
        background {
          sourceUrl
        }
      }
    }
  }
`;

export const WHAT_QUERY = gql`
  {
    getContent {
      what {
        title
        description
        asset {
          sourceUrl
        }
        highlightFrom
        highlightTo
      }
    }
  }
`;

export const WHY_QUERY = gql`
  {
    getContent {
      why {
        title
        description
        asset {
          sourceUrl
        }
        highlightFrom
        highlightTo
      }
    }
  }
`;

export const HOW_QUERY = gql`
  {
    getContent {
      how {
        title
        steps {
          name
          description
          icon {
            sourceUrl
          }
        }
      }
    }
  }
`;

export const KEY_RESOURCE_QUERY = gql`
  {
    getContent {
      keyResource {
        title
        testimonials {
          testimonial
        }
      }
    }
  }
`;

export const INDUSTRIES_QUERY = gql`
  {
    getContent {
      industries {
        title
        industries {
          name
          percentage
        }
      }
    }
  }
`;

export const VENTURES_QUERY = gql`
  {
    getContent {
      ventures {
        title
        ventures {
          name
          logo {
            sourceUrl
          }
        }
      }
    }
  }
`;

export const FIRST_QUOTE_QUERY = gql`
  {
    getContent {
      firstQuote {
        quote
        name
        title
        background {
          sourceUrl
        }
      }
    }
  }
`;

export const BEGINNING_QUERY = gql`
  {
    getContent {
      beginning {
        title
        description
        asset {
          sourceUrl
        }
        highlightTo
        highlightFrom
      }
    }
  }
`;

export const FUNDING_STATISTICS_QUERY = gql`
  {
    getContent {
      fundingStatistics {
        title
        statistics {
          number
          description
        }
      }
    }
  }
`;

export const SECOND_QUOTE_QUERY = gql`
  {
    getContent {
      secondQuote {
        quote
        name
        title
        background {
          sourceUrl
        }
      }
    }
  }
`;

export const GLOBAL_INFLUENCE_QUERY = gql`
  {
    getContent {
      globalInfluence {
        title
        background {
          sourceUrl
        }
      }
    }
  }
`;

export const FACES_QUERY = gql`
  {
    getContent {
      faces {
        title
        people {
          name
          description
          asset {
            sourceUrl
          }
        }
      }
    }
  }
`;

export const MILESTONES_QUERY = gql`
  {
    getContent {
      milestones {
        title
        milestones {
          title
          description
          link
          assets {
            asset {
              sourceUrl
            }
          }
        }
      }
    }
  }
`;

export const IMPACT_QUERY = gql`
  {
    getContent {
      impact {
        title
        statistics {
          number
          description
        }
      }
    }
  }
`;

export const MOSAIC_QUERY = gql`
  {
    getContent {
      mosaic {
        title
        description
        asset {
          sourceUrl
        }
        highlightTo
        highlightFrom
      }
    }
  }
`;

export const DIVERSITY_QUERY = gql`
  {
    getContent {
      diversity {
        title
        asset {
          sourceUrl
        }
      }
    }
  }
`;

export const CONTRIBUTORS_QUERY = gql`
  {
    getContent {
      contributors {
        title
        contributors
      }
    }
  }
`;

export const GET_INVOLVED_QUERY = gql`
  {
    getContent {
      getInvolved {
        title
        description
        asset {
          sourceUrl
        }
        link
      }
    }
  }
`;

export const CLOSING_QUERY = gql`
  {
    getContent {
      closing {
        title
        background {
          sourceUrl
        }
      }
    }
  }
`;
