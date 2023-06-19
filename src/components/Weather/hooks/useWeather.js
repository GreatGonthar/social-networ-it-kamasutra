import React, { useEffect, useState, useContext, useRef, memo } from "react";

const API_KEY = "9e6eb31bee626a2223d5e078f3f117ad";

const useWeather = (city) => {
	const [weatherData, setWeatherData] = useState({});
	useEffect(() => {
		fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
		)
			.then((data) => data.json())
			.then((data) => {
				const { main, weather, coord } = data;
				console.log("data", data)
				setWeatherData({
					temp: main.temp,
					feels_like: main.feels_like,
					humidity: main.humidity,
					description: weather[0].description,
					icon: weather[0].icon,
					coords: coord,
				});
			})
			.catch((error) => {
				
				setWeatherData({
					temp: "ERROR",
					feels_like: "ERROR",
					humidity: "ERROR",
					description: "ERROR",
					icon: "ERROR",
					coords: "ERROR",
				});
			});
	}, []);	
	return weatherData;
};
export default useWeather;
