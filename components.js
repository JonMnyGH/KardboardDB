import React, { useState, useEffect } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';
import MapView from 'react-native-maps';

export const MyMapComponent = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  // Request access for location permissions and store them
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  return (
    <View style={styles.container}>
      {location ? (
        <MapView
          // Initialize the map around the user's locations
          region={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 150,
            longitudeDelta: 150,
          }}
          style={styles.map}
        >
          <MapView.Marker
            // Place a map marker at the user's location
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
          />
        </MapView>
      ) : (
        <Text style={styles.text}>{errorMsg || 'Gathering location...'}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  text: { marginTop: 12 },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export const statusViewComponent = ({ color }) => {
  return (
    <View
      style={{
        backgroundColor: color,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: color,
        height: 48,
        width: 48,
      }}
    ></View>
  );
};
