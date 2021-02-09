import React, { useState } from 'react';
import { View, Linking, Platform, StyleSheet, Text, TouchableOpacity } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
    
    parent: {
        margin: 5,
    },
    container: {
        display: 'flex',
        flexGrow: 1
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

const RepositoryView = (props) => {
    const info = props.location.state;
    console.log("info", info);

    return (
        <View style={styles.parent}>
            <RepositoryItem props={info} />
            <LinkButton url={info.url}/>
        </View>
    );
};

export default RepositoryView;

/*
return (
    <View>
        <Text>
            Here in repository view.
        </Text>
    </View>
)
*/