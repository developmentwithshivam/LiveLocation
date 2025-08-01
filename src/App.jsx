import { useEffect } from "react";
import useGeoLocationApi from "./GeolocationApi/useGeoLocationApi.js";
import createLocation from "./Appwrite/Database.js";
import Home from "./Pages/Home.jsx";
console.log("App");

function App() {
  const [position, error] = useGeoLocationApi();
  console.log(position);
  
// useEffect(() => {
    if(position.lat && position.lng){
      console.log("working");
     const result = createLocation(position);
   }
// }, [])


  return (
    <>
    <Home position={position} error={error}/>
    </>
  );
}

export default App;
