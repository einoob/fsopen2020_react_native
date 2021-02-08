import React, { useContext } from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import { useHistory } from 'react-router-native';
import Constants from 'expo-constants';     
import AppBarTab from './AppBarTab';
import { GET_AUTHORIZATION } from '../graphql/queries';
import { useApolloClient, useQuery } from '@apollo/react-hooks';
import AuthStorageContext from '../contexts/AuthStorageContext';

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
    let history = useHistory();
    const apolloClient = useApolloClient();
    const authStorage = useContext(AuthStorageContext);
    const { data } = useQuery(GET_AUTHORIZATION);
    apolloClient.resetStore();
    console.log("appBar after query", data);
    let signInMethod = data == undefined || data.authorizedUser == null ? 'Sign in' : 'Sign out';

    const onSignOut = async () => {
        console.log("went to onPress");
        if (signInMethod === 'Sign out') {
            console.log("went to if");
            await authStorage.removeAccessToken();
            apolloClient.resetStore();
            history.push('/');
            signInMethod = 'Sign in';
        }
    };
    //authStorage.removeAccessToken();
    apolloClient.resetStore();
    return (
    <View style={styles.container}>
        <ScrollView horizontal>
        <AppBarTab style={styles.flexItem1} title='Repositories' link='/'/>
        <View style={styles.horizontalSpace}></View>
        <AppBarTab style={styles.flexItem1} title={signInMethod} onPress={onSignOut} link='/SignIn' />
        </ScrollView>
    </View>
    );
};

export default AppBar;
