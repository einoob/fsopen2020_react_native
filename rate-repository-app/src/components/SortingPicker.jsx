import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: 400,
        marginBottom: 10,
    },
    picker: {
        backgroundColor: 'black',
    }
});

const SortingPicker = ({ setSortOrder }) => {

    return (
        <View style={styles.container}>
        <RNPickerSelect
        placeholder={{ label: "Sort repositories by...",  value: ''}}
        style={StyleSheet.flatten(styles.picker)} 
        onValueChange={(value) => setSortOrder(value)}
        items={
            [
                {label: "Latest repositories", value: "CREATED_AT"},
                {label: "Highest rated repositories", value: "RATING_AVERAGE_DESC"},
                {label: "Lowest rated repositories", value: "RATING_AVERAGE_ASC"}
            ]
        }
        />
        </View>
    );
};

export default SortingPicker;