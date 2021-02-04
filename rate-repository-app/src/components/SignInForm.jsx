import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import FormikTextInput from './FormikTextInput';

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#6ac4e6',
        borderWidth: 1,
        borderColor: '#A0A0A0',
        borderRadius: 3,
        height: 40,
        width: 150,
        margin: 5,
        textAlign: 'center',
        textAlignVertical: 'center'
    }
});

const SignInForm = ({ onSubmit }) => {
    return (
        <View style={{ backgroundColor: 'white' }}>
            <FormikTextInput 
                name='username'
                placeholder=' Username'
            />
            <FormikTextInput
                secureTextEntry
                name='password' 
                placeholder=' Password'
            />
            <TouchableWithoutFeedback onPress={onSubmit}>
                <View>
                    <Text fontSize='subheading' style={styles.button}>Sign in</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
};

export default SignInForm;
