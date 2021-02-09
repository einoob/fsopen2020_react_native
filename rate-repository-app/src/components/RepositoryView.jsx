import React, { useState } from 'react';
import { View, Linking, Platform, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import moment from 'moment';
import RepositoryItem from './RepositoryItem';
import Text from './Text';

const styles = StyleSheet.create({  
    parent: {
        margin: 5,
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
    },
    buttonBackground: {
        backgroundColor: 'white',
        width: 400,
        height: 50,
        borderRadius: 3,
        marginTop: -5,
    },
    button: {
        backgroundColor: '#0366d6',
        color: 'white',
        width: 300,
        height: 30,
        marginTop: 10,
        alignSelf: 'center',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 16,
        borderRadius: 3,
    }
});

const LinkButton = ({url}) => {
    
    const handlePress = () => {
        Platform.select({
            android: WebBrowser.openBrowserAsync(url),
            default: Linking.openURL(url),
        });
    };
    
    return (
            <View style={styles.buttonBackground}>
                <TouchableOpacity onPress={handlePress}>
                <Text style={styles.button}>
                    Open in GitHub
                </Text>
                </TouchableOpacity>
            </View>
    );
        
};

const ReviewItem = ({ review }) => {
    const data = review.node;
    const date = moment(data.createdAt).format('DD.MM.YYYY');
    return (
        <View style={styles.container}>
            <Text>{data.rating.toString()}</Text>
            <Text fontWeight='bold'>{data.user.username}</Text>
            <Text color='textSecondary'>{date}</Text>
            <Text>{data.text}</Text>
        </View>
    )
};

const RepositoryView = (props) => {
    const info = props.location.state;
    console.log("info", info);
    console.log("reviews", info.reviews.edges);
  return (
        <FlatList 
        data={info.reviews.edges}
        renderItem={({ item }) => <ReviewItem review={item}/>}
        keyExtractor={(item, index) => 'key'+index}
        ListHeaderComponent={() => 
        <View>
            <RepositoryItem props={info}/>
            <LinkButton url={info.url}/>
        </View>}
        />
    );
};

export default RepositoryView;
