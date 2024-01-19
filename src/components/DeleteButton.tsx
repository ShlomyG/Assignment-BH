import {StyleSheet, Text, TouchableOpacity, ViewStyle} from 'react-native';
import React from 'react';
import {Emojis} from '../constants/strings';

interface Props {
  style?: ViewStyle;
  action: () => void;
  disabled?: boolean;
}

const DeleteButton: React.FC<Props> = ({style, action, disabled = false}) => {
  return (
    <TouchableOpacity
      onPress={action}
      hitSlop={10}
      disabled={disabled}
      style={[styles.container, style]}>
      <Text style={styles.deleteIcon}>{Emojis.DELETE}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    zIndex: 100,
  },
  deleteIcon: {
    fontSize: 22,
    alignSelf: 'center',
    marginBottom: 20,
  },
});

export default DeleteButton;
