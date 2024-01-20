import {StyleSheet, Text, TouchableOpacity, ViewStyle} from 'react-native';
import React from 'react';
import {colors} from '../constants/colors';

interface AppButtonProps {
  text: string;
  onPress: () => void;
  enable?: boolean;
  styleButton?: ViewStyle;
}
const AppButton: React.FC<AppButtonProps> = ({
  onPress,
  text,
  enable = true,
  styleButton,
}) => {
  return (
    <TouchableOpacity
      disabled={!enable}
      style={[
        styles.button,
        {
          backgroundColor: enable ? colors.green : colors.light_grey,
        },
        styleButton,
      ]}
      onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 14,
    height: 43,
    width: 200,
    marginTop: 14,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
});
export default AppButton;
