import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FormikTextInput from './FormikTextInput';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: 'white',
    },
    button: {
        display: 'flex',
        backgroundColor: '#0366d6',
        borderRadius: 3,
        height: 50,
        width: 350,
        margin: 5,
        justifyContent: 'center',
        marginBottom: 10,
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center',
        paddingLeft: -10,
    }
});

const SignInForm = ({ onSubmit }) => {
    return (
        <View style={styles.container}>
            <FormikTextInput 
                name='username'
                placeholder=' Username'
                testID='username'
            />
            <FormikTextInput
                secureTextEntry
                name='password' 
                placeholder=' Password'
                testID='password'
            />
            <TouchableOpacity
            activeOpacity={0.5}
            onPress={onSubmit}
            testID='submitButton'
            style={styles.button}>
                <Text style={styles.text}>Sign in</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SignInForm;
