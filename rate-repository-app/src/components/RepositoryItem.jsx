import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'stretch',
        width: 500,
        paddingBottom: 5,
        paddingTop: 5
    },
    flexItemA: {
        flexDirection: 'column',
        paddingLeft: 10,
        marginBottom: 3,
        paddingBottom: 3
    },
    flexItemA1: {
        paddingBottom: 3,
    },
    flextItemB: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'flex-end',
        width: 400
    },
    flexItemB1: {
        display: 'flex',
        paddingLeft: 25,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignSelf: 'center',
        fontWeight: 'bold'
    },
    flexItemB2: {
        alignSelf: 'flex-end',
        width: 60,
    },
    image: {
        width: 50,
        height: 50,
        margin: 3,
    },
});

const Statistics = ({props}) => {
    const stars = props.stargazersCount >= 1000
    ? Math.round((props.stargazersCount / 1000) * 10) / 10 + 'k'
    : props.stargazersCount;
    
    const forks = props.forksCount >= 1000
    ? Math.round((props.forksCount / 1000) * 10) / 10 + 'k'
    : props.forksCount;

    return (
        <Text style={styles.flextItemB}>
            <Text style={styles.flexItemB1}>{stars}
                <Text style={styles.flexItemB2}>Stars</Text>
            </Text>
            <Text style={styles.flexItemB1}>{forks}
                <Text style={styles.flexItemB2}>Forks</Text>
            </Text>
            <Text style={styles.flexItemB1}>{props.reviewCount}
                <Text style={styles.flexItemB2}>Reviews</Text>
            </Text>
            <Text style={styles.flexItemB1}>{props.ratingAverage}
                <Text style={styles.flexItemB2}>Rating</Text>
            </Text>
        </Text>
    );
};

const Firststuff = ({props}) => {
    return (
        <Text style={styles.flexItemA}>
                <Text fontWeight='bold' fontSize='subheading' style={styles.flexItemA1}>{props.fullName}{"\n"}</Text>
                <Text color='textSecondary' style={styles.flexItemA1}>{props.description}{"\n"}</Text>
                <Text color='white' backgroundColor='primary' borderRadius='round' styles={styles.flexItemA1}>{props.language}</Text><Text>{"\n"}</Text>
         </Text>
    );
};

const RepositoryItem = ({props}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: props.ownerAvatarUrl}}/>
            <Firststuff props={props}/>
            <Statistics props={props}/>
        </View>
    );
};

export default RepositoryItem;