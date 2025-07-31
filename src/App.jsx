console.log("changes")
import { useEffect, useState } from 'react'

function App() {
const [position, setPosition] = useState({ lat: null, lng: null });
const [error, seterror] = useState(null);
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.watchPosition(
        (pos) => {
          setPosition({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          });
          seterror(null);
        },
        (err) => {
          console.error("Error getting location:", err);
          seterror("Not working")
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
     {error && <h1>Error: {error}</h1>}
      <h2 className='text-4xl'>Your Current Location</h2>
      <p>Latitude: {position.lat}</p>
      <p>Longitude: {position.lng}</p>
    </div>
    </>
  )
}

export default App
