import React, { useState, useEffect } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '600px',
};

const fetchCoordinatesForAddress = async (address) => {
  try {
    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=AIzaSyD4L2nToNJz03jV_2uKUGVAEUTr8OAOjjU`);
    const data = await response.json();
    console.log(data);
    if (data.status !== 'OK' || data.results.length === 0) {
      console.error('No results found for the given address.');
      return null;
    }
    return data.results[0].geometry.location;
  } catch (error) {
    console.error('Failed to fetch coordinates:', error);
    return null;
  }
};

const LocationPage = (props) => {
  const [markers, setMarkers] = useState([
    { lat: 4.7110, lng: -74.0721, title: "Ubicación inicial en Bogotá" }
  ]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const newUserLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          title: "Tu Ubicación Actualizada"
        };
        setMarkers(currentMarkers => [...currentMarkers, newUserLocation]);
      },
      (error) => {
        console.error(error);
      }
    );

    const address = "Cl. 42 Sur #25-51";
    fetchCoordinatesForAddress(address).then(location => {
      if (location) {
        setMarkers(currentMarkers => [...currentMarkers, { lat: location.lat, lng: location.lng, title: "Dirección Específica" }]);
      } else {
        console.log('No se pudo obtener las coordenadas para la dirección proporcionada.');
      }
    });
  }, []);

  return (
    <Map
      google={props.google}
      zoom={12}
      style={mapStyles}
      initialCenter={{
        lat: markers[0].lat,
        lng: markers[0].lng
      }}
    >
      {markers.map((marker, index) => (
        <Marker key={index} position={{ lat: marker.lat, lng: marker.lng }} title={marker.title} />
      ))}
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyD4L2nToNJz03jV_2uKUGVAEUTr8OAOjjU'
})(LocationPage);
