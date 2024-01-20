import React, {ForwardedRef, forwardRef} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  KeyboardTypeOptions,
  ViewStyle,
} from 'react-native';
import {colors} from '../constants/colors';
import {EInputReturnType} from '../features/editPostModal/models/editModalModels';

interface AppInputProps {
  value: string;
  onChange: (text: string) => void;
  label: string;
  keyboardType?: KeyboardTypeOptions;
  editable?: boolean;
  numberOfLines?: number;
  inputStyle?: ViewStyle;
  textStyle?: ViewStyle;
  onSubmitEditing?: () => void;
  returnKeyType?: EInputReturnType;
}

const AppInput: React.FC<AppInputProps> = forwardRef<TextInput, AppInputProps>(
  (
    {
      label,
      value,
      onChange,
      keyboardType = 'default',
      editable = true,
      numberOfLines = 1,
      textStyle,
      inputStyle,
      onSubmitEditing,
      returnKeyType = 'done',
    },
    ref: ForwardedRef<TextInput>,
  ) => {
    return (
      <View style={styles.container}>
        <Text style={styles.text_name}>{label}</Text>
        <View style={[styles.input_container, inputStyle]}>
          <TextInput
            multiline={numberOfLines > 1}
            autoCapitalize={'none'}
            style={[styles.text_input, textStyle]}
            value={value}
            onChangeText={onChange}
            keyboardType={keyboardType}
            editable={editable}
            selectTextOnFocus={editable}
            numberOfLines={numberOfLines}
            ref={ref}
            returnKeyType={returnKeyType}
            onSubmitEditing={onSubmitEditing}
          />
        </View>
      </View>
    );
  },
);

export default AppInput;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignSelf: 'center',
    marginTop: 24,
  },
  input_container: {
    flexDirection: 'row',
    alignSelf: 'center',
    height: 50,
    width: 260,
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: colors.white,
    borderColor: colors.dark_grey,
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 6,
  },
  text_input: {
    flex: 1,
    fontSize: 16,
    color: colors.black,
    textAlign: 'left',
  },
  text_name: {
    color: colors.black,
    fontSize: 14,
    textAlign: 'center',
  },
  icon: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
  },
});
