import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
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
        padding: 5,
    },
    flexItem1: {
        display: 'flex',
        textAlignVertical: 'bottom',
        padding: 3,
    },
    horizontalSpace: {
        width: 5,
    },
});

const AppBar = () => {
    return (
    <View style={styles.container}>
        <ScrollView horizontal>
        <AppBarTab style={styles.flexItem1} title='Repositories' link='/'/>
        <View style={styles.horizontalSpace}></View>
        <AppBarTab style={styles.flexItem1} title='Sign In' link='/SignIn'/>
        </ScrollView>
    </View>
    );
};

export default AppBar;
