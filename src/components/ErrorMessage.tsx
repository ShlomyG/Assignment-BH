import React from 'react';
import {StyleSheet, Text, TextStyle, View} from 'react-native';
import {colors} from '../constants/colors';

interface Props {
  textMessage: string;
  textStyle?: TextStyle | TextStyle[];
}
const ErrorMessage: React.FC<Props> = ({textStyle, textMessage}) => {
  return (
    <View style={styles.error_msg_container}>
      <Text numberOfLines={0} style={{...styles.error_text, ...textStyle}}>
        {textMessage}
      </Text>
    </View>
  );
};

export default ErrorMessage;

export const styles = StyleSheet.create({
  error_msg_container: {
    marginTop: 6,
  },
  error_text: {
    color: colors.red,
    alignSelf: 'center',
    fontSize: 16,
  },
});
