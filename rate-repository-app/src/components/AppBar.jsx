import React from 'react';
import {View, StyleSheet} from 'react-native';
import Constants from 'expo-constants';     
import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        display: 'flex',
        backgroundColor: '#ffa866',
        height: 100,
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingBottom: 5,
        paddingLeft: 5
    },
    flexItem1: {
        textAlignVertical: 'bottom',
        flexGrow: 0,
    },
});

const AppBar = () => {
    return (
    <View style={styles.container}>
        <AppBarTab title='Repositories' style={styles.flexItem1} />
    </View>);
};

export default AppBar;
