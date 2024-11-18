import axios from "axios";
import { useState } from "react";
function Weather() {

  const [city, setInput] = useState("")
  const [weather, setWeather] = useState("")
  const [temp, setTemp] = useState("")
  const [desc, setDesc] = useState("")

  function HandleInput(evt) {
    setInput(evt.target.value)
  }

  function getWeather() {
    var weatherData = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=066634facafbe2a6add1afa55bd23e14#`)
    weatherData.then(function (result) {
      console.log(result.data)
      setWeather(result.data.weather[0].main)
      setDesc(result.data.weather[0].description)
      setTemp(result.data.main.temp)
    })
  }


  return (
    <>
      <div className="bg-black p-3 flex flex-col">
        <div className="bg-white p-2 bg-red-600 border rounded-xl">
          <h1 className="text-white text-2xl font-bold">Weather Report</h1>
          <p className="text-white text-md font-bold">i can give you a weather report about youre city</p>
          <input onChange={HandleInput} type="text" placeholder="City" className="border rounded p-1 mt-1" />
          <br />
          <button onClick={getWeather} className="text-white bg-black p-1 mt-2 border rounded">Get Report</button>
          <p className="font-bold text-white">Weather:{weather}</p>
          <p className="font-bold text-white">Temperature:{temp}</p>
          <p className="font-bold text-white">Description:{desc}</p>
        </div>
      </div>

    </>)
}
export default Weather;