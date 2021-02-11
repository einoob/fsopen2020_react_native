import React from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Text from './Text'
import FormikTextInput from './FormikTextInput'

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: 'white',
    },
    button: {
        display: 'flex',
        backgroundColor: '#0366d6',
        borderRadius: 3,
        margin: 5,
        height: 50,
        width: 350,
        justifyContent: 'center',
        marginBottom: 10,
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center',
        margin: -5,
    }
});

const SignUpForm = ({ onSubmit }) => {
    return (
        <View style={styles.container}>
            <FormikTextInput
                name='username'
                placeholder=' Username'
            />
            <FormikTextInput
                name='password'
                placeholder=' Password'
                secureTextEntry
            />
            <FormikTextInput
                name='passwordValidation'
                placeholder=' Confirm password'
                secureTextEntry
            />
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={onSubmit}
                style={styles.button} >
                <View>
                    <Text style={styles.text}>Sign up!</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default SignUpForm;
