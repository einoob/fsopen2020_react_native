import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import FormikTextInput from './FormikTextInput';
import Text from './Text';

const styles = StyleSheet.create({
    form: {
        backgroundColor: 'white',
        padding: 10,
    },
    button: {
        display: 'flex',
        backgroundColor: '#0366d6',
        borderRadius: 3,
        margin: 5,
        height: 50,
        width: 350,
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf: 'center',
        margin: -5,
    }
})

const ReviewForm = ({ onSubmit }) => {
    return (
        <View style={styles.form}>
            <FormikTextInput 
            name='ownerName'
            placeholder=' GitHub username'
            />
            <FormikTextInput 
            name='repositoryName'
            placeholder=" Repository's name"/>
            <FormikTextInput 
            name='rating'
            placeholder=' Numerical rating'/>
            <FormikTextInput 
            name='text'
            placeholder=' Review text'/>
            <TouchableOpacity 
            onPress={onSubmit} 
            style={styles.button} 
            activeOpacity={0.5} 
            delayPressIn={0}
            delayPressOut={100}>
                <Text style={styles.text}>
                    Submit review
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default ReviewForm;
