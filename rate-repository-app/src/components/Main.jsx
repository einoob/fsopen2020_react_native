import React from 'react';
import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import { Route, Switch, Redirect, Link} from 'react-router-native';

import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import SignIn from './SignIn';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,
        backgroundColor: '#EAEAEA',
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
            <Switch>
                <Route path='/' exact component={RepositoryList}>
                </Route>
                <Route path='/signin' component={SignIn}>
                </Route>
            </Switch>
        </View>
    );
};

export default Main;
