import React from 'react'
import { useState, useEffect } from 'react'






export const Weatherapp = () => {


    const [country, setCountry] = useState ('India');
    const [temperature, setTemperature] = useState (null);
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const apiKey = "YOUR-API-KEY"
    
            const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=${setCountry}&units=metric&appid=${apiKey}');
            const jsonData = await response.json();
            setCountry(jsonData);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, [setCountry]);
    
    //Whenever the country changes, the useeffect updates..
    
    
    const handlechange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setCountry(event.target.value);
      };




  return (
    <div>
        <h1> Welcome to Weather Report</h1>
        <label>Select a Country: </label>
        <select value={country} onChange={handlechange}  > 
        
        <option value="China">general</option>
          <option value="Germany">travel</option>
          <option value="USA">music</option></select>


    </div>
  )
};

export default Weatherapp;
