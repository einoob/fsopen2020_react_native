import React from 'react';
import {StyleSheet, View} from 'react-native';

import AppBar from './AppBar';
import RepositoryList from './RepositoryList';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,
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
            <AppBar/>
            <RepositoryList/>
        </View>
    );
};

export default Main;
