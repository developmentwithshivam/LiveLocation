import React from "react";
import Container from "../Leaflet/Container";
console.log("Home");

function Home({position,error}) {
  return (
    <>
      <div>
        {error && <h1>Error: {error}</h1>}
        <h2 className="text-4xl">Your Current Location</h2>
        <p>Latitude: {position.lat}</p>
        <p>Longitude: {position.lng}</p>
      </div>
      <Container lat={position.lat} lng={position.lng} />
    </>
  );
}

export default Home;
