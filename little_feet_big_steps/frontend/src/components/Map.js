import React, { useState } from 'react';
import { GoogleMap, Marker, InfoWindow, useJsApiLoader } from '@react-google-maps/api';
import { format, parseISO } from 'date-fns';

const mapContainerStyle = {
  width: '100%', // Adjust the width as needed
  height: '400px', // Adjust the height as needed
};

const center = {
  lat: -41.17665433918174, // Example latitude, adjust as needed
  lng: 146.34330811231922, // Example longitude, adjust as needed
};
const libraries = ["places"]; 


const Map = ({ blogPosts }) => {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBJFcjQgNMJNPXoGfqIKoIvUU_oEMJhFe8",
    libraries: libraries,
  });

  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleMarkerClick = (location) => {
    setSelectedLocation(location);
  };

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps</div>;

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={8}
      center={center}
    >
      {blogPosts.map((location, index) => (
        <Marker
          key={index}
          position={{ lat: location.lat, lng: location.long }}
          onClick={() => handleMarkerClick(location)}
        />
      ))}
      {selectedLocation && (
        <InfoWindow
          position={{ lat: selectedLocation.lat, lng: selectedLocation.long }}
          onCloseClick={() => setSelectedLocation(null)}
        >
          <div>
            <h2>{selectedLocation.title + " - " + format(parseISO(selectedLocation.created_at), "EEEE, do 'of' MMMM yyyy", { awareOfUnicodeTokens: true })}</h2>
            {selectedLocation.images.map((imageURL, index) => (
              <img key={index} src={imageURL} alt={`Location ${index}`} style={{ width: '300px', height: 'auto' }} />
            ))}
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default Map;
