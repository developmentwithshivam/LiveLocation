console.log("changes")
import { useEffect, useState } from 'react'

function App() {
const [position, setPosition] = useState({ lat: null, lng: null });
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.watchPosition(
        (pos) => {
          setPosition({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          });
        },
        (err) => {
          console.error("Error getting location:", err);
        },
        {
          enableHighAccuracy: true,
          maximumAge: 0,
          timeout: 5000,
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <>
    <div>
      <h2>Your Current Location</h2>
      <p>Latitude: {position.lat}</p>
      <p>Longitude: {position.lng}</p>
    </div>
    </>
  )
}

export default App
