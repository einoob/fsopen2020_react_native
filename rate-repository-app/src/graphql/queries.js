import { gql } from 'apollo-boost';

export const GET_REPOSITORIES = gql `
    query repositories(
        $after: String
        $first: Int
        $orderDirection: OrderDirection
        $orderBy: AllRepositoriesOrderBy
        $searchKeyword: String
        $ownerName: String
      ) {
        repositories(
          after: $after
          first: $first
          orderDirection: $orderDirection
          orderBy: $orderBy
          searchKeyword: $searchKeyword
          ownerName: $ownerName
        ) {
          edges {
            node {
              createdAt
              description
              forksCount
              fullName
              id
              url
              language
              name
              ownerAvatarUrl
              ownerName
              ratingAverage
              reviewCount
              stargazersCount
            }
            cursor
          }
          pageInfo {
            endCursor
            startCursor
            totalCount
            hasNextPage
          }
        }
      }
    `;

export const GET_AUTHORIZATION = gql ` 
      query authorizedUser {
        authorizedUser {
          id
          username
        }
      }
`;