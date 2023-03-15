import { gql } from '@apollo/client';

export const GET_ALL_COUNTRY = gql`
  query {
    countries {
      code
      name
      native
      phone
      capital
      currency
      languages {
        name
        native
      }
      continent {
        name
      }
      emoji
      states {
        name
      }
    }
  }
`;
