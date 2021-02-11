import React from 'react';
import { View, Text } from 'react-native';
import { useHistory, useParams } from 'react-router-native';
import RepositoryView from './RepositoryView';
import useRepository from '../hooks/useRepository';

const SingleRepositoryView = () => {
    let { id } = useParams();
    const { repository } = useRepository(id);

    if (repository == undefined) {
        return null;
    }

    return (
        <RepositoryView props={repository} origin='review' />
    );
}

export default SingleRepositoryView;
