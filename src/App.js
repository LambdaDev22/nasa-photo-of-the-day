import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import NasaPhoto from './Components/NasaPhoto'

const dummyData = {
  date: "2022-12-14",
  explanation: "Why is the Moon so dusty? On Earth, rocks are weathered by wind and water, creating soil and sand. On the Moon, the history of constant micrometeorite bombardment has blasted away at the rocky surface creating a layer of powdery lunar soil or regolith.  For the Apollo astronauts and their equipment, the pervasive, fine, gritty dust was definitely a problem",
  hdurl: "https://apod.nasa.gov/apod/image/2212/AS17-137-20979.jpg",
  title: "Lunar Dust and Duct Tape"
}

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => {
        setData(res.data)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
     { data && <NasaPhoto photo={data} />}
    </div>
  );
}

export default App;
