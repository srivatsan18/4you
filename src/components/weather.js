import React, { useState } from 'react';

const Forecast = () => {
    let [responseObj, setResponseObj] = useState({})
   function getForecast() {
      // weather data fetch function will go here
      fetch("https://current-precious-metal-price.p.rapidapi.com/metals/v1/1", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "current-precious-metal-price.p.rapidapi.com",
            "x-rapidapi-key": "233cfbb5a8msh6a7708a9921c9b0p128c64jsn230d05a19f42"
        }
        })
.then(response => response.json())
.then(response =>{
    setResponseObj(response)
})
   }

   return (
       // JSX code will go here
       <div>
           <h2>Find Current Weather Conditions</h2>
           <div>
               {JSON.stringify(responseObj)}
           </div>
           <button onClick={getForecast}>Get Forecast</button>
       </div>
   )
}

export default Forecast;
