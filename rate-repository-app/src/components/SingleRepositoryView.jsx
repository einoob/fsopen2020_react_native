import React from 'react';
import { View, Text } from 'react-native';
import { useHistory, useParams } from 'react-router-native';
import RepositoryView from './RepositoryView';
import useRepository from '../hooks/useRepository';

const SingleRepositoryView = () => {
    let { id } = useParams();
    console.log(id);
    const { repository } = useRepository(id);
    const history = useHistory();
    console.log(repository);
    if (repository == undefined) {
        console.log("repository untrue");
        return null;
    }
    console.log("repository true");
    return (
        <RepositoryView props={repository} />
    );
}

export default SingleRepositoryView;
// <RepositoryItem props={repository.repository}/>