import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DefaultTheme} from '@react-navigation/native';
import {colors} from '../constants/colors';
import {Screens} from '../constants/screens';
import HomeScreen from '../features/homepage/HomeScreen';
import LaunchScreen from '../features/launch/LaunchScreen';
import MapScreen from '../features/map/MapScreen';
import EditPostModal from '../features/editPostModal/EditPostModal';
import {useAppSelector} from '../store/Store';
import {Emojis, HomeStrings, LaunchStrings} from '../constants/strings';

export type RootStackParamList = {
  launchScreen: undefined;
  homeScreen: undefined;
  mapScreen: undefined;
};
const StackNavigator = createNativeStackNavigator<RootStackParamList>();
const AppNavigator: React.FC = () => {
  const {modalVisible} = useAppSelector(state => state.EditPostModalSlice);

  return (
    <>
      <EditPostModal isModalVisible={modalVisible} />
      <StackNavigator.Navigator initialRouteName={Screens.LAUNCH_SCREEN}>
        <StackNavigator.Screen
          name={Screens.LAUNCH_SCREEN}
          component={LaunchScreen}
          options={{title: LaunchStrings.TITLE}}
        />
        <StackNavigator.Screen
          name={Screens.HOMEPAGE_SCREEN}
          component={HomeScreen}
          options={{title: HomeStrings.TITLE}}
        />
        <StackNavigator.Screen
          name={Screens.MAP_SCREEN}
          component={MapScreen}
          options={{title: Emojis.MAP}}
          initialParams={undefined}
        />
      </StackNavigator.Navigator>
    </>
  );
};

export const NavigationTheme = {
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.white,
    background: colors.white,
  },
};

export default AppNavigator;
