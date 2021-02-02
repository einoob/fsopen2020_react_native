import React from 'react';
import { Text as NativeText, StyleSheet} from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
    text: {
      color: theme.colors.textPrimary,
      fontSize: theme.fontSizes.body,
      fontFamily: theme.fonts.main,
      fontWeight: theme.fontWeights.normal,
    },
    colorTextSecondary: {
      color: theme.colors.textSecondary,
    },
    colorPrimary: {
      color: theme.colors.primary,
    },
    colorWhite: {
      color: theme.colors.white
    },
    backgroundColor: {
      backgroundColor: theme.colors.primary,
    },
    fontSizeSubheading: {
      fontSize: theme.fontSizes.subheading,
    },
    fontWeightBold: {
      fontWeight: theme.fontWeights.bold,
    },
    roundCorners: {
      borderRadius: 3
    },
    padding: {
      padding: 3
    },
    margin: {
      marginBottom: 3
    }
  });

  const Text = ({ color, fontSize, fontWeight, style, backgroundColor, borderRadius, padding, margin, ...props }) => {
      const textStyle = [
          styles.text,
          color === 'textSecondary' && styles.colorTextSecondary,
          color === 'primary' && styles.colorPrimary,
          color === 'white' && styles.colorWhite,
          backgroundColor === 'primary' && styles.backgroundColor,
          fontSize === 'subheading' && styles.fontSizeSubheading,
          fontWeight === 'bold' && styles.fontWeightBold,
          borderRadius === 'round' && styles.roundCorners,
          padding === '3' && styles.padding,
          margin === '3' && styles.margin,
          style,
      ];
      
      return <NativeText style={textStyle} {...props} />;
  };

  export default Text;