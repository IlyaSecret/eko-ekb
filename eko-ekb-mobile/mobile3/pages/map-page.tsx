import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

const INITIAL_REGION = {
  latitude: 56.83765,
  longitude: 60.594528,
  latitudeDelta: 0.1,
  longitudeDelta: 0.1,
};

function MapPage(): React.JSX.Element {
  const [points, setPoints] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null);

  useEffect(() => {
    axios
      .get('http://51.250.28.250:8080/point/get')
      .then(response => setPoints(response.data));
  }, []);

  const closeInfoBox = () => {
    setSelectedMarker(null);
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={INITIAL_REGION}
        showsUserLocation
        followsUserLocation
        showsMyLocationButton>
        {points.map(marker => (
          <Marker
            key={marker.id}
            coordinate={{
              longitude: marker.ingLat.cord1,
              latitude: marker.ingLat.cord2,
              latitudeDelta: 0.1,
              longitudeDelta: 0.1,
            }}
            onPress={() => setSelectedMarker(marker)}>
            <Image
              source={require('../assets/location-pin.png')}
              style={styles.marker}
            />
          </Marker>
        ))}
      </MapView>

      {selectedMarker && (
        <View style={styles.bottomInfo}>
          <TouchableOpacity onPress={closeInfoBox} style={styles.closeButton}>
            <Text style={styles.closeButton}>x</Text>
          </TouchableOpacity>
          <Text>{selectedMarker.title}</Text>
          <Text>{selectedMarker.address}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  header: {
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
  },
  headerText: {
    color: '#8AC44B',
    fontSize: 25,
    fontWeight: 'bold',
  },
  map: {
    flex: 1,
    width: '100%',
  },
  marker: {
    width: 20,
    height: 20,
  },
  bottomInfo: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    fontSize: 25,
    top: -5,
    right: 5,
    padding: 5,
    borderRadius: 15,
  },
});

export default MapPage;
