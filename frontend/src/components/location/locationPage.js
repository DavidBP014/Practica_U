import React, { useState, useEffect } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import callApi from '../../utils/api';

const mapStyles = {
  width: '100%',
  height: '400px',
};

const LocationPage = (props) => {
    const [userLocation, setUserLocation] = useState({ lat: 0, lng: 0 });
    const [jardines, setJardines] = useState([]);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setUserLocation({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                });
            },
            (error) => {
                console.error(error);
            }
        );

        const fetchJardines = async () => {
            try {
                const response = await callApi('/jardines'); 
                setJardines(response.jardines);
            } catch (error) {
                console.error('Error fetching jardines:', error);
            }
        };
        
        fetchJardines();
    }, []);

    return (
      <Map
          google={props.google}
          style={mapStyles}
          initialCenter={userLocation}
          center={userLocation}
          zoom={15}
      >
          <Marker position={userLocation} title="Tu Ubicación" />
          {jardines.map((jardin, index) => (
            <Marker
              key={index}
              position={{ lat: jardin.latitud, lng: jardin.longitud }}
              title={jardin.nombre}
            />
          ))}
      </Map>
    );
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyAL0LqR3PA49z8gmgYbWPSpJRdAWTtbuaI' // Asegúrate de reemplazar 'TU_API_KEY' con tu clave API real
})(LocationPage);
