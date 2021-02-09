import React from 'react';
import { TouchableOpacity } from 'react-native';
import Text from './Text';

const AppBarTab = ({ children, ...props }) => {

    return (
    <TouchableOpacity {...props}>
        <Text fontSize='subheading' color='colorWhite' fontWeight='bold'>
            {children}
        </Text>
    </TouchableOpacity>
    );
};

export default AppBarTab;
