import React, { useEffect } from "react";
import {
  MapContainer,
  Marker,
  Polyline,
  Popup,
  TileLayer,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const some_position = [51.505, -0.09];

function ResetCenterView(props) {
  const { selectPosition, destination } = props;
  const map = useMap();

  function setView(position) {
    if (position) {
      map.setView(L.latLng(position.lat, position.lon), map.getZoom(), {
        animate: true,
      });
    }
  }

  useEffect(() => {
    setView(selectPosition);
    console.log({
      destination: destination,
      addres: selectPosition,
    });
  }, [selectPosition]);

  useEffect(() => {
    setView(destination);
    console.log({
      destination: destination,
      addres: selectPosition,
    });
  }, [destination]);

  return null;
}

export default function Map({ selectPosition, destination }) {
  const originPosition = [selectPosition?.lat, selectPosition?.lon];
  const destPosition = [destination?.lat, destination?.lon];

  const polyline = [originPosition, destPosition];

  function haversineDistance(point1, point2) {
    const R = 6371; // Radius of the Earth in kilometers
    const toRadians = (angle) => (angle * Math.PI) / 180;

    const dLat = toRadians(point2?.lat - point1?.lat);
    const dLon = toRadians(point2?.lon - point1?.lon);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadians(point1?.lat)) *
        Math.cos(toRadians(point2?.lat)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers

    return distance;
  }

  // Example usage:
  const distance = haversineDistance(selectPosition, destination);
  console.log(`Distance: ${distance} km`);

  return (
    <MapContainer
      center={some_position}
      zoom={16}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=NAlmOmGuKbNTKdxGdzUy"
      />
      {selectPosition && (
        <>
          <Marker position={originPosition}>
            <Popup>
              Origin: {selectPosition.lat}, {selectPosition.lon}
            </Popup>
          </Marker>

          <ResetCenterView selectPosition={selectPosition} />
        </>
      )}
      {destination && (
        <>
          <Marker position={destPosition}>
            <Popup>
              Destination: {destination.lat}, {destination.lon}
            </Popup>
          </Marker>
          <ResetCenterView destination={destination} />
        </>
      )}
      {destination && selectPosition && (
        <Polyline pathOptions={{ color: "pink" }} positions={polyline} />
      )}
    </MapContainer>
  );
}
