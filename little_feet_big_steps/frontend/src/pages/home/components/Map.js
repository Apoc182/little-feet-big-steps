import React, { useState } from "react";
import { GoogleMap, Marker, InfoWindow, useJsApiLoader } from "@react-google-maps/api";
import { format, parseISO } from "date-fns";

const mapContainerStyle = {
  width: "100%", // Adjust the width as needed
  height: "600px", // Adjust the height as needed
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
    <GoogleMap mapContainerStyle={mapContainerStyle} zoom={8} center={center} onClick={() => setSelectedLocation(null)}>
      {blogPosts.map((location, index) => (
        <Marker key={index} position={{ lat: location.lat, lng: location.long }} onClick={() => handleMarkerClick(location)} />
      ))}
      {selectedLocation && (
        <InfoWindow position={{ lat: selectedLocation.lat, lng: selectedLocation.long }} onCloseClick={() => setSelectedLocation(null)} style={{ padding: 0 }} className="test---class">
          <div className="map-container" style={{ textAlign: "center", margin: "0.5rem", width: "22rem" }}>
            <h2 className="map-content-header" style={{ margin: "0.5rem", fontSize: "1.4rem" }}>
              {selectedLocation.title + " - " + format(parseISO(selectedLocation.created_at), "EEEE, do 'of' MMMM yyyy", { awareOfUnicodeTokens: true })}
            </h2>
            <p className="map-content-body" style={{ margin: "0.5rem", fontSize: "0.9rem" }}>
              {selectedLocation.body}
            </p>
            <div>
              <img className="map-image" style={{ width: "22rem", height: "18rem", objectFit: "cover" }} src={selectedLocation.images[0].url} alt="First blog image, more in blog page" />
            </div>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default Map;
