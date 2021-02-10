import React from 'react';
import { Text } from 'react-native';
import { useHistory, useParams } from 'react-router-native';
import RepositoryItem from './RepositoryItem';
import useRepository from '../hooks/useRepository';

const SingleRepositoryView = () => {
    let { id } = useParams();
    console.log(id);
    const { repository } = useRepository(id);
    const history = useHistory();
    console.log(repository);
   
    if (!repository) {
        history.push("/");
    }
    
    return (
        <Text>
            Here in id route
        </Text>
    )
}

export default SingleRepositoryView;
// <RepositoryItem props={repository.repository}/>