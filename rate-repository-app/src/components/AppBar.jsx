import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import Text from './Text';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
    }
});

const AppBar = () => {
    return <View style={styles.container}>
        <TouchableWithoutFeedback>
            <Text fontSize='subheading' color='primary' fontWeight='bold'>
                Repositories
            </Text>
        </TouchableWithoutFeedback>
    </View>;
};

export default AppBar;
