import React from 'react';
import {StyleSheet, View} from 'react-native';
import { Route, Switch, NativeRouter as Router } from 'react-router-native';

import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import SignIn from './SignIn';
import RepositoryView from './RepositoryView';
import CreateReview from './CreateReview';
import SingleRepositoryView from './SingleRepositoryView'

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
            <Router>
            <AppBar/>
            <Switch>
                <Route path='/' exact component={RepositoryList}/>
                <Route path='/signin' component={SignIn}/>
                <Route path='/repositorylist' component={RepositoryList}/>
                <Route path='/repositoryview' component={RepositoryView}/>
                <Route path='/createreview' component={CreateReview}/>
                <Route path='/:id'>
                    <SingleRepositoryView/>
                </Route>
            </Switch>
            </Router>
        </View>
    );
};

export default Main;
// <Route path='/:id' component={SingleRepositoryView}/>