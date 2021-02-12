import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    input: {
        width: 400,
        borderWidth: 1,
        borderRadius: 3,
        marginBottom: 5,
        height: 30,
        padding: 3,
    }
});

const FilterInput = ({ setFilter }) => {
    return (
        <TextInput
        style={styles.input}
        onChangeText={(text) => setFilter(text)}
        placeholder="Filter repositories..."
        />
    )
};

export default FilterInput;
