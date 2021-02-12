import { useState } from 'react';
import { useQuery } from '@apollo/react-hooks'; 

import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (sortOrder, filter) => {
  let queryVariable;
  const [repositories, setRepositories] = useState();
  if (sortOrder === '' || sortOrder === 'CREATED_AT')
  {
    queryVariable = { orderBy: "CREATED_AT", orderDirection: "DESC", searchKeyword: filter };
  }
  else {
    queryVariable = sortOrder === "RATING_AVERAGE_ASC" 
    ? { orderBy: "RATING_AVERAGE", orderDirection: "ASC", searchKeyword: filter}
    : { orderBy: "RATING_AVERAGE", orderDirection: "DESC", searchKeyword: filter};
  }
  console.log("queryVariable", queryVariable);
  const { error, loading } = useQuery(GET_REPOSITORIES ,{
      variables: queryVariable,
      fetchPolicy: 'cache-and-network',
      onCompleted: (data) => {
          setRepositories(data.repositories);
      }
  });
  return { repositories, loading, error };
};

export default useRepositories;
