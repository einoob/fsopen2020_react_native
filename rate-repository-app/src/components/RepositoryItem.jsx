import React from 'react';
import {Text, View} from 'react-native';

const RepositoryItem = ({props}) => {
    return (
        <View>
            <Text>
                Full name: {props.fullName}{"\n"}
                Description: {props.description}{"\n"}
                Language: {props.language}{"\n"}
                Stars: {props.stargazersCount}{"\n"}
                Forks: {props.forksCount}{"\n"}
                Reviews: {props.reviewCount}{"\n"}
                Rating: {props.ratingAverage}
            </Text>
        </View>
    );
};

export default RepositoryItem;