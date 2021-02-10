import { useState } from 'react';
import { useQuery } from '@apollo/react-hooks'; 
import { GET_REPOSITORY } from '../graphql/queries';

const useRepository = (id) => {
    console.log("id in hook", id);
    const [repository, setRepository] = useState();
    console.log("id again", id);

    const { error, loading } = useQuery(GET_REPOSITORY, {
        variables: { id },
        fetchPolicy: "cache-and-network",
        onCompleted: (data) => {
          setRepository(data.repository);
        },
      });
    console.log(repository);
    return { repository, loading, error };
};

export default useRepository;
