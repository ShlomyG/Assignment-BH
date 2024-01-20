import React, {useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import AppButton from '../../components/AppButton';
import {LaunchStrings} from '../../constants/strings';
import {Screens} from '../../constants/screens';
import {navigate} from '../../navigation/RootNavigation';
import {useAppDispatch} from '../../store/Store';
import {getUsersDataAction} from '../homepage/state/HomeAction';
import {initAxios} from '../../utils/NetworkManager';

const LaunchScreen: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    initAxios();
    dispatch(getUsersDataAction());
  });

  const handleEnterApp = () => {
    navigate(Screens.HOMEPAGE_SCREEN);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title_text}>{LaunchStrings.TITLE}</Text>
      <AppButton text={LaunchStrings.BUTTON_TEXT} onPress={handleEnterApp} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title_text: {
    marginTop: 50,
    fontWeight: '700',
    fontSize: 28,
  },
});

export default LaunchScreen;
