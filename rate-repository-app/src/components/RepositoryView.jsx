import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Link } from 'react-router-native';
import * as WebBrowser from 'expo-web-browser';
import RepositoryItem from './RepositoryItem';
import ReviewItem from './ReviewItem';
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
        WebBrowser.openBrowserAsync(url);
        /*Platform.select({
            android: WebBrowser.openBrowserAsync(url),
            default: Linking.openURL(url),
        });*/
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



const RepositoryView = (props) => {
    let info;
    if (props.origin == 'review') {
        info = props.props;
    } else {
        info = props.location.state;
    }
    console.log("info", info);
    console.log("reviews", info.reviews.edges);
  return (
        <FlatList 
        data={info.reviews.edges}
        renderItem={({ item }) => <ReviewItem review={item}/>}
        keyExtractor={(item, index) => 'key'+index}
        ListHeaderComponent={() => 
        <View style={styles.parent}>
            <RepositoryItem props={info} linkto='list'/>
            <LinkButton url={info.url}/>
        </View>
        }
        />
    );
};

export default RepositoryView;
