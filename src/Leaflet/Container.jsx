import React from "react";
import { MapContainer, TileLayer, useMap, Marker,Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';

function Container({lat, lng}) {
  // if (lat && lng) {
  //   console.log("Container props:", lat, lng);
  // }
  
  return (
      <div className="h-96 w-screen border-2 border-black overflow-hidden">
       <MapContainer center={[lat || 23, lng || 72]} zoom={9} scrollWheelZoom={true} style={{ height: "100%", width: "100%" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat || 51.505, lng ||-0.09]}>
        <Popup>
          I am here <br /> Shivam.
        </Popup>
      </Marker>
    </MapContainer>
    </div>
  );
}

export default Container;
