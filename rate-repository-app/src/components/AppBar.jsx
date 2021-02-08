import React, { useContext } from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import { useHistory, Link } from 'react-router-native';
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
    console.log("appBar after query", data);
    let signInMethod = data == undefined || data.authorizedUser == null ? 'Sign in' : 'Sign out';

    const onSignOut = async () => {
        if (signInMethod === 'Sign out') {
            await authStorage.removeAccessToken();
            apolloClient.resetStore();
            history.push('/');
            signInMethod = 'Sign in';
        }
    };

   // apolloClient.resetStore();
    return (
    <View style={styles.container}>
        <ScrollView horizontal>
            <Link to='/' component={AppBarTab}>
                Repositories
            </Link>
            <View style={styles.horizontalSpace}></View>
            {
                signInMethod == 'Sign out' ? (
                    <AppBarTab onPress={onSignOut}>
                        Sign out
                    </AppBarTab>
                ) : (
                    <Link to='signin' component={AppBarTab}>
                        Sign in
                    </Link>
                )
            }
        </ScrollView>
    </View>
    );
};

export default AppBar;
