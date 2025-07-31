import React from "react";
import { MapContainer, TileLayer, useMap, Marker,Popup } from "react-leaflet";
console.log("Container component loaded");

function Container({lat, lng}) {
  return (
       <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true} style={{ height: "100%", width: "100%" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505,-0.09]}>
        <Popup>
          I am here <br /> Shivam.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Container;
