import React from 'react';
import Constants from 'expo-constants';
import {Text, StyleSheet, View} from 'react-native';

import RepositoryList from './RepositoryList';

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        flexGrow: 1,
        flexShrink: 1,
        marginLeft: 5,
    },

    header: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 5,
    },
});

const Main = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Rate repository Application</Text>
            <RepositoryList/>
        </View>
    );
};

export default Main;
