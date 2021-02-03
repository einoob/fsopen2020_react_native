import React from 'react';
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Link } from 'react-router-native';
import Text from './Text';

const AppBarTab = ({ title, link }) => {
    return (
    <TouchableWithoutFeedback>
        <Link to={link} component={TouchableOpacity}>
        <Text fontSize='subheading' color='colorWhite' fontWeight='bold'>
            {title}
        </Text>
        </Link>
    </TouchableWithoutFeedback>
    );
};

export default AppBarTab;