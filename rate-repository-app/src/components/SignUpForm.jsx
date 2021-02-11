import React from 'react'
import { View, TouchableOpacity } from 'react-native';
import Text from './Text'
import FormikTextInput from './FormikTextInput'


const SignUpForm = ({ onSubmit }) => {
    return (
        <View>
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
                placeholder=' Validate password'
                secureTextEntry
            />
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={onSubmit} >
                <View>
                    <Text>Sign up!</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default SignUpForm;
