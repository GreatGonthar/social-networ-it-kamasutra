import React, { useEffect, useState, useContext, useRef, memo } from "react";

const API_KEY = "9e6eb31bee626a2223d5e078f3f117ad";

const useForecast = ({ lat, lon } = { lat: 0, lon: 0 }) => {
	const [ForecastData, setForecastData] = useState({});
	useEffect(() => {
		if (lat && lon) {
			fetch(				
				`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`
			)
				.then((data) => data.json())
				.then((data) => {
					setForecastData(data);					
				})
				.catch((error) => {
					console.log("error");
				});
		}
	}, [lat, lon]);
	return ForecastData;
};
export default useForecast;
