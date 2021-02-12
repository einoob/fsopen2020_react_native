import { useState } from 'react';
import { useQuery } from '@apollo/react-hooks'; 

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (sortOrder) => {
  let quereyVariable;
  const [repositories, setRepositories] = useState();
  if (sortOrder === '' || sortOrder === 'CREATED_AT')
  {
    quereyVariable = { orderBy: "CREATED_AT", orderDirection: "DESC" };
  }
  else {
    quereyVariable = sortOrder === "RATING_AVERAGE_ASC" 
    ? { orderBy: "RATING_AVERAGE", orderDirection: "ASC"} : { orderBy: "RATING_AVERAGE", orderDirection: "DESC"};
  }
  const { error, loading } = useQuery(GET_REPOSITORIES ,{
      variables: quereyVariable,
      fetchPolicy: 'cache-and-network',
      onCompleted: (data) => {
          setRepositories(data.repositories);
      }
  });
  return { repositories, loading, error };
};

export default useRepositories;
