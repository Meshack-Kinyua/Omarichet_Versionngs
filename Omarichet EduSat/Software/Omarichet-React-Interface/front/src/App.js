import "./App.css"
import React, { useState, useEffect } from "react";
import SensorTab from "./Components/SensorTab"

function App() {
  const [sensors, setSensors] = useState("");

  useEffect(() => {
    const getData = async () => {
      const sensorsFromServer = await fetchSensors();
      setSensors(sensorsFromServer);
    };
    getData();
  }, []);

  const fetchSensors = async () => {
    const res = await fetch("http://192.168.8.198:8080/sensors")
    const data = await res.json();
    return data;
  }
  return (
    <>
    {sensors && <SensorTab sensors = {sensors}/>}
    </>
    
  );
}

export default App;
