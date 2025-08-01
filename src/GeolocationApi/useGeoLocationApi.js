import React from "react";
import { useEffect, useState } from "react";
console.log("geoapi");

function useGeoLocationApi() {
  const [position, setPosition] = useState({ lat: 0, lng: 0 });
  const [error, seterror] = useState(null);

  useEffect(() => {
    const GeoApi = ()=>{
       if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPosition({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          });
          seterror(null);
        },
        (err) => {
          console.error("Error getting location:", err);
          seterror("Turn on location");
        },
        {
          // enableHighAccuracy: true,
          maximumAge: 0,
          timeout: 20000,
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
    }
    GeoApi();
    setInterval(() => {
      GeoApi();
    }, 60000);
  }, []);

  return [position,error];
}

export default useGeoLocationApi;
