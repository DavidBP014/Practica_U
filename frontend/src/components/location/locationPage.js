import React, { useState, useEffect } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import callApi from '../../utils/api';
import { useAuth } from '../../context/AuthContext';

const mapStyles = {
  width: '100%',
  height: '400px',
};

const LocationPage = (props) => {
    const [userLocation, setUserLocation] = useState({ lat: 0, lng: 0 });
    const [jardines, setJardines] = useState([]);
    const { isAuthenticated } = useAuth(); // Asumiendo que tienes un estado de autenticación en tu contexto

    useEffect(() => {
        if (isAuthenticated) {
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
                    const response = await callApi('/jardines'); // Ajusta la URL de tu API
                    setJardines(response.jardines); // Asegúrate de que la estructura de la respuesta coincida
                } catch (error) {
                    console.error('Error fetching jardines:', error);
                }
            };
            
            fetchJardines();
        }
    }, [isAuthenticated]);

    return (
      <div>
        {isAuthenticated ? (
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
        ) : (
          <p>Por favor, inicia sesión para ver esta página.</p>
        )}
      </div>
    );
};

export default GoogleApiWrapper({
    apiKey: 'TU_API_KEY' // Asegúrate de reemplazar 'TU_API_KEY' con tu clave API real
})(LocationPage);
