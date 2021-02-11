import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';
import moment from 'moment';


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: 'white',
        margin: 5,
        width: 400,
        borderRadius: 3,
        padding: 3,
    },
    container2: {
        display: 'flex',
        flexDirection: 'column',
        width: 340,
    },
    rating: {
        display: 'flex',
        borderColor: '#0366d6',
        borderWidth: 3,
        width: 40,
        height: 40,
        borderRadius: 20,
        color: 'red',
        textAlign: 'center',
        textAlignVertical: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        margin: 5,
    },
    number: {
        display: 'flex',
        alignSelf: 'center',
        marginTop: -1,
        color: '#0366d6',
        fontWeight: 'bold',
    },
    flexItem: {
        margin: 2,
    }
});

const ReviewItem = ({ review }) => {
    const data = review.node;
    const date = moment(data.createdAt).format('DD.MM.YYYY');
    return (
        <View style={styles.container}>
            <Text style={styles.rating}><Text style={styles.number}>{data.rating.toString()}</Text></Text>
            <View style={styles.container2}>
                <Text fontWeight='bold' style={styles.flexItem}>{data.user.username}</Text>
                <Text color='textSecondary' style={styles.flexItem}>{date}</Text>
                <Text style={styles.flexItem}>{data.text}</Text>
            </View>
        </View>
    )
};

export default ReviewItem;