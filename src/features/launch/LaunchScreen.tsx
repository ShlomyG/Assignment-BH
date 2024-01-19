import React, {useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import AppButton from '../../components/AppButton';
import {LaunchStrings} from '../../constants/strings';
import {Screens} from '../../constants/screens';
import {navigate} from '../../navigation/RootNavigation';
import {useAppDispatch} from '../../store/Store';
import {getUsersDataAction} from '../homepage/state/HomeAction';
import {initAxios} from '../../utils/NetworkManager';
import MapScreen from '../maps/MapScreen';

const LaunchScreen: React.FC = () => {
  const dispatch = useAppDispatch();
  // const {usersData} = useAppSelector(state => state.HomepageSlice);

  useEffect(() => {
    initAxios();
    dispatch(getUsersDataAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  const handleEnterApp = () => {
    navigate(Screens.HOMEPAGE_SCREEN);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title_text}>{LaunchStrings.TITLE}</Text>
      <AppButton
        text={LaunchStrings.BUTTON_TEXT}
        onPress={handleEnterApp}
        // styleButton={{backgroundColor: 'red'}}
      />
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
