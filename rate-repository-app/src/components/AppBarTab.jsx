import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import Text from './Text';

const styles = StyleSheet.create({
    tab: {
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 3,
        padding: 3,
    },
})

const AppBarTab = ({ children, ...props }) => {

    return (
    <TouchableOpacity {...props}>
        <Text fontSize='subheading' fontWeight='bold' style={styles.tab}>
            {children}
        </Text>
    </TouchableOpacity>
    );
};

export default AppBarTab;
