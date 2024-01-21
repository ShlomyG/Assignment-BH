import React, {useEffect} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import AppButton from '../../components/AppButton';
import {LaunchStrings} from '../../constants/strings';
import {Screens} from '../../constants/screens';
import {navigate} from '../../navigation/RootNavigation';
import {useAppDispatch} from '../../store/Store';
import {getUsersDataAction} from '../homepage/state/HomeAction';
import {initAxios} from '../../utils/NetworkManager';
import {logoImage} from '../../constants/constants';

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
      <View style={styles.title_container}>
        <Text style={styles.title_text}>{LaunchStrings.APP_NAME}</Text>
        <Image source={logoImage} />
      </View>
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
  title_container: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 18,
  },
  title_text: {
    marginTop: 60,
    fontWeight: '700',
    fontSize: 28,
  },
});

export default LaunchScreen;
