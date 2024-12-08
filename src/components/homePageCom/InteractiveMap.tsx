import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import React from "react";

// Define custom marker icon
const icon = new L.Icon({
  iconUrl: "/marker-icon.png", // Replace with your marker image
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

// Destination data
const destinations = [
  { lat: 31.6295, lng: -7.9811, city: "Marrakech", price: "102 €" },
  { lat: 48.8566, lng: 2.3522, city: "Paris", price: "244 €" },
  { lat: 40.7128, lng: -74.006, city: "New York", price: "410 €" },
  { lat: 34.0522, lng: -118.2437, city: "Los Angeles", price: "877 €" },
];

export const InteractiveMap = () => {
  return (
    <div className="w-full h-96">
      <MapContainer
        center={[31.6295, -7.9811]} // Centered on Marrakech
        zoom={3}
        scrollWheelZoom={true}
        className="w-full h-full rounded-lg"
      >
        {/* Tile Layer */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Markers */}
        {destinations.map((destination, index) => (
          <Marker
            key={index}
            position={[destination.lat, destination.lng]}
            icon={icon}
          >
            <Popup>
              <strong>{destination.city}</strong>
              <br />
              Price: {destination.price}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};
