console.log("changes")
import { useEffect, useState } from 'react'
import Container from './Leaflet/Container.jsx'

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
          seterror("Turn on location")
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
     <div className="h-screen w-screen border-2 border-black">
    <Container lat={position.lat} lng={position.lng} />
     </div>
    </>
  )
}

export default App
