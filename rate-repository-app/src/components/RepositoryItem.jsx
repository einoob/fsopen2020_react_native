import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { Link } from 'react-router-native';
import Text from './Text';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'stretch',
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        width: 400,
        paddingBottom: 5,
        paddingTop: 5,
    },
    flexItemA: {
        paddingLeft: 10,
        marginBottom: 3,
        paddingBottom: 3
    },
    flexItemA1: {
        overflow: 'hidden',
        paddingBottom: 3,
    },
    flexItemA2 : {
        display: 'flex',

        paddingBottom: 3,
        width: 250,
    },
    flextItemB: {
        display: 'flex',
        flexDirection: 'row',
        alignSelf: 'flex-end',
        marginLeft: 5,
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
        display: 'flex',
        alignSelf: 'flex-end',
        width: 60,
    },
    image: {
        display: 'flex',
        width: 50,
        height: 50,
        margin: 5,
    },
    link: {
        width: 400,
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
        <View style={styles.flextItemB}>
            <Text style={styles.flexItemB1} testID='repStars'>{stars}
                <Text style={styles.flexItemB2}>{"\n"}Stars</Text>
            </Text>
            <Text style={styles.flexItemB1} testID='repForks'>{forks}
                <Text style={styles.flexItemB2}>{"\n"}Forks</Text>
            </Text>
            <Text style={styles.flexItemB1} testID='repReviewCount'>{props.reviewCount}
                <Text style={styles.flexItemB2}>{"\n"}Reviews</Text>
            </Text>
            <Text style={styles.flexItemB1} testID='repRatingAverage'>{props.ratingAverage}
                <Text style={styles.flexItemB2}>{"\n"}Rating</Text>
            </Text>
        </View>
    );
};

const Firststuff = ({props}) => {
    return (
        <Text style={styles.flexItemA}>
                <Text fontWeight='bold' fontSize='subheading' style={styles.flexItemA1}
                    testID='repFullName' >{props.fullName}{"\n"}</Text>
                <Text color='textSecondary' style={styles.flexItemA2}
                    testID='repDescription'>{props.description}{"\n"}</Text>
                <Text backgroundColor='primary' borderRadius='round' styles={styles.flexItemA1}
                    testID='repLanguage'>
                        <Text style={{ padding: 4, color: 'white' }}>{props.language}</Text>
                </Text><Text>{"\n"}</Text>
         </Text>
    );
};

const RepositoryItem = ({ props, linkto }) => {
    
    return (
        <TouchableOpacity activeOpacity={0.4}>
        <Link to={
            linkto == 'list' ? {
                pathname: '/repositorylist'
            } : {
            pathname: '/repositoryview',
            state: props
            }
        }>
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: props.ownerAvatarUrl}}/>
            <Firststuff props={props}/>
            <Statistics props={props}/>
        </View>
        </Link>
        </TouchableOpacity>
    );
};

export default RepositoryItem;

