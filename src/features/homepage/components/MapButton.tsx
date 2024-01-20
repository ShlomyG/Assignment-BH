import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {Screens} from '../../../constants/screens';
import {navigate} from '../../../navigation/RootNavigation';

interface MapButtonProps {
  lat?: number;
  lng?: number;
}

const MapButton: React.FC<MapButtonProps> = ({lat, lng}) => {
  const handlePress = () => {
    if (lat !== undefined && lng !== undefined) {
      navigate(Screens.MAP_SCREEN, {lat, lng});
    }
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <Text style={styles.geoText}>
        {lat} {lng}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  geoText: {
    fontSize: 16,
  },
});

export default MapButton;
