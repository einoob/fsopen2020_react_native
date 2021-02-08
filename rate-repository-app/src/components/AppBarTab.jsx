import React from 'react';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Link } from 'react-router-native';
import Text from './Text';

const AppBarTab = ({ children, ...props }) => {

    return (
    <TouchableWithoutFeedback {...props}>
        <Text fontSize='subheading' color='colorWhite' fontWeight='bold'>
            {children}
        </Text>
    </TouchableWithoutFeedback>
    );
};

export default AppBarTab;
