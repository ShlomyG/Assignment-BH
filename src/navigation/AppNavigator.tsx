import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {DefaultTheme} from '@react-navigation/native';
import {colors} from '../constants/colors';
import {Screens} from '../constants/screens';
import HomeScreen from '../features/homepage/HomeScreen';
import LaunchScreen from '../features/launch/LaunchScreen';
import MapScreen from '../features/map/MapScreen';

export type RootStackParamList = {
  launchScreen: undefined;
  homeScreen: undefined;
  mapScreen: undefined;
};
const StackNavigator = createNativeStackNavigator<RootStackParamList>();
const AppNavigator: React.FC = () => {
  return (
    <>
      {/* <BaseBottomSheet /> */}
      <StackNavigator.Navigator initialRouteName={Screens.LAUNCH_SCREEN}>
        <StackNavigator.Screen
          name={Screens.LAUNCH_SCREEN}
          component={LaunchScreen}
        />
        <StackNavigator.Screen
          name={Screens.HOMEPAGE_SCREEN}
          component={HomeScreen}
        />
        <StackNavigator.Screen
          name={Screens.MAP_SCREEN}
          component={MapScreen}
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
