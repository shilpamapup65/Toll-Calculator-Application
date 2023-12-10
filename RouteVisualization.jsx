import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

const RouteVisualization = ({ routeData }) => {
  const [decodedRoute, setDecodedRoute] = useState([]);

  useEffect(() => {
    if (routeData) {
      const decoded = decodePolyline(routeData.polyline);
      setDecodedRoute(decoded);
    }
  }, [routeData]);

  const decodePolyline = (encodedPolyline) => {
    // Implement decoding logic (you can use @googlemaps/polyline-codec library or other alternatives)

    return decodePolyline(encodedPolyline);
  };

  const renderMarkers = () => {
    if (!routeData || !decodedRoute) {
      return null;
    }

    return routeData.tolls.map((toll, index) => (
      <Marker
        key={index}
        position={[toll.latitude, toll.longitude]}
        icon={L.divIcon({ className: 'custom-marker', html: `<div>${toll.cost}</div>` })}
      >
        <Popup>
          <div>
            <p>Toll Cost: ${toll.cost}</p>
            <p>Additional Details: {toll.additionalDetails}</p>
          </div>
        </Popup>
      </Marker>
    ));
  };

  return (
    <MapContainer center={[0, 0]} zoom={2} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {decodedRoute && <Polyline positions={decodedRoute} />}
      {renderMarkers()}
    </MapContainer>
  );
};

export default RouteVisualization;

