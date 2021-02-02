import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import Text from './Text';

const AppBarTab = ({ title }) => {
    return (
    <TouchableWithoutFeedback>
        <Text fontSize='subheading' color='colorWhite' fontWeight='bold'>
            {title}
        </Text>
    </TouchableWithoutFeedback>
    );
};

export default AppBarTab;