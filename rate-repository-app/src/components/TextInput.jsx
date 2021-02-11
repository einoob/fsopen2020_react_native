import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#A0A0A0',
        borderRadius: 3,
        height: 40,
        width: 350,
        margin: 5,
        paddingLeft: 5,
    },
    error: {
        borderWidth: 1,
        borderColor: '#d73a4a',
        borderRadius: 3,
        height: 40,
        width: 350,
        margin: 5,
    }
});

const TextInput = ({style, error, ...props}) => {
   const showStyle = error ? styles.error : styles.input;

    return (
        <NativeTextInput value={props.value} style={showStyle} {...props}/>
    );
};

export default TextInput;
