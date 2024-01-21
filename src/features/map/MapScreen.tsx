import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {MapScreenProps} from './models/mapModel';
import {logoImage} from '../../constants/constants';

const MapScreen: React.FC<MapScreenProps> = ({route}) => {
  const {lat, lng} = route?.params || {lat: 0, lng: 0};

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        zoomEnabled={true}
        zoomTapEnabled={true}
        zoomControlEnabled={true}
        toolbarEnabled={true}
        initialRegion={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: 0.015,
          longitudeDelta: 0.04,
        }}>
        <Marker coordinate={{latitude: lat, longitude: lng}}>
          <View style={styles.markerContainer}>
            <Image source={logoImage} />
          </View>
        </Marker>
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  markerContainer: {
    alignItems: 'center',
  },
});

export default MapScreen;
