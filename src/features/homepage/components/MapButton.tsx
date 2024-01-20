import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {Screens} from '../../../constants/screens';
import {navigate} from '../../../navigation/RootNavigation';
import {Emojis} from '../../../constants/strings';

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
    <TouchableOpacity onPress={handlePress} style={{margin: 8}}>
      <Text style={styles.geoText}>{lat}</Text>
      <Text style={styles.geoText}>{lng}</Text>
      <Text style={styles.geoText}>{Emojis.MAP}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  geoText: {
    fontSize: 10,
    alignSelf: 'center',
  },
});

export default MapButton;
