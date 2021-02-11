import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        width: 400,
        height: 30,
        marginBottom: 10,
    },
    picker: {
        backgroundColor: 'black',
    }
});

const SortingPicker = () => {

    const [value, setValue] = useState();
    return (
        <View style={styles.container}>
        <RNPickerSelect
        style={styles.picker} 
        onValueChange={(value) => setValue(value)}
        items={
            [
                {label: "Latest repositories", value: "CREATED AT"},
                {label: "Highest rated repositories", value: "RATING AVERAGE"},
                {label: "Lowest rated repositories", value: "RATING AVERAGE"}
            ]
        }
        />
        </View>
    );
};

export default SortingPicker;