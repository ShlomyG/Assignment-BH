import React from 'react';
import {StyleSheet, Text, TextStyle} from 'react-native';
import {colors} from '../constants/colors';

interface Props {
  style?: TextStyle | TextStyle[];
  children: React.ReactNode;
  numberOfLines?: number;
}
const BoldText: React.FC<Props> = ({children, style, numberOfLines = 1}) => {
  return (
    <Text numberOfLines={numberOfLines} style={[styles.text, style]}>
      {children}
    </Text>
  );
};

export default BoldText;

const styles = StyleSheet.create({
  text: {
    fontWeight: '700',
    color: colors.black,
    fontSize: 16,
  },
});
