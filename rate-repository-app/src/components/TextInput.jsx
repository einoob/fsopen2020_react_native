import React from 'react';
import {TextInput as NativeTextInput, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#A0A0A0',
        borderRadius: 3,
        height: 40,
        width: 400,
        margin: 5,
    }
});

const TextInput = (style, error, ...props) => {
    return (
        <NativeTextInput style={styles.input} {...props}/>
    );
};

export default TextInput;
