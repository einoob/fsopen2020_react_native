import React from 'react';
import { render } from '@testing-library/react-native';
import { RepositoryListContainer } from '../../components/RepositoryList';

describe('RepositoryList', () => {
    describe('RepositoryListContainer', () => {
      it('renders repository information correctly', () => {
        const repositories = {
          pageInfo: {
            totalCount: 8,
            hasNextPage: true,
            endCursor:
              'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
            startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
          },
          edges: [
            {
              node: {
                id: 'jaredpalmer.formik',
                fullName: 'jaredpalmer/formik',
                description: 'Build forms in React, without the tears',
                language: 'TypeScript',
                forksCount: 1619,
                stargazersCount: 21856,
                ratingAverage: 88,
                reviewCount: 3,
                ownerAvatarUrl:
                  'https://avatars2.githubusercontent.com/u/4060187?v=4',
              },
              cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
            },
            {
              node: {
                id: 'async-library.react-async',
                fullName: 'async-library/react-async',
                description: 'Flexible promise-based React data loader',
                language: 'JavaScript',
                forksCount: 69,
                stargazersCount: 1760,
                ratingAverage: 72,
                reviewCount: 3,
                ownerAvatarUrl:
                  'https://avatars1.githubusercontent.com/u/54310907?v=4',
              },
              cursor:
                'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
            },
          ],
        };

        const { debug, getAllByTestId } = render(<RepositoryListContainer repositories={repositories}/>)

      //  debug();

        const names = getAllByTestId("repFullName");
        expect(names).toHaveLength(2);
        expect(names[0]).toHaveTextContent("jaredpalmer/formik");
        expect(names[1]).toHaveTextContent("async-library/react-async");

        const descriptions = getAllByTestId("repDescription");
        expect(descriptions).toHaveLength(2);
        expect(descriptions[0]).toHaveTextContent(repositories.edges[0].node.description);
        expect(descriptions[1]).toHaveTextContent(repositories.edges[1].node.description);

        const languages = getAllByTestId("repLanguage");
        expect(languages).toHaveLength(2);
        expect(languages[0]).toHaveTextContent(repositories.edges[0].node.language);
        expect(languages[1]).toHaveTextContent(repositories.edges[1].node.language);

        const stars = getAllByTestId("repStars");
        const stars0 = repositories.edges[0].node.stargazersCount >= 1000
        ? Math.round((repositories.edges[0].node.stargazersCount / 1000) * 10) / 10 + 'k'
        : repositories.edges[0].node.stargazersCount;
        const stars1 = repositories.edges[1].node.stargazersCount >= 1000
        ? Math.round((repositories.edges[1].node.stargazersCount / 1000) * 10) / 10 + 'k'
        : repositories.edges[1].node.stargazersCount;
        expect(stars).toHaveLength(2);
        expect(stars[0]).toHaveTextContent(stars0.toString());
        expect(stars[1]).toHaveTextContent(stars1.toString());

        const forks = getAllByTestId("repForks");
        const forks0 = repositories.edges[0].node.forksCount >= 1000
        ? Math.round((repositories.edges[0].node.forksCount / 1000) * 10) / 10 + 'k'
        : repositories.edges[0].node.forksCount;
        const forks1 = repositories.edges[1].node.forksCount >= 1000
        ? Math.round((repositories.edges[1].node.forksCount / 1000) * 10) / 10 + 'k'
        : repositories.edges[1].node.forksCount;
        expect(forks).toHaveLength(2);
        expect(forks[0]).toHaveTextContent(forks0.toString());
        expect(forks[1]).toHaveTextContent(forks1.toString());

        const reviews = getAllByTestId("repReviewCount");
        expect(reviews).toHaveLength(2);
        expect(reviews[0]).toHaveTextContent(repositories.edges[0].node.reviewCount.toString());
        expect(reviews[1]).toHaveTextContent(repositories.edges[1].node.reviewCount.toString());

        const ratings = getAllByTestId("repRatingAverage");
        expect(ratings).toHaveLength(2);
        expect(ratings[0]).toHaveTextContent(repositories.edges[0].node.ratingAverage.toString());
        expect(ratings[1]).toHaveTextContent(repositories.edges[1].node.ratingAverage.toString());

      });
    });
  });
  