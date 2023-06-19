import React, { Component, useEffect, useState, useContext, memo } from "react";
import classes from "./SinglCity.module.css";
import { GlobalContext } from "../Weather";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import useWeather from "../hooks/useWeather";
import useForecast from "../hooks/useForecast";
import DailyCard from "../DailyCard/DailyCard";
import { useLocation, useParams } from "react-router-dom/cjs/react-router-dom.min";

const SinglCity = (props) => {
	const location = useLocation();
	const city = props.match.params.singlCity;
	const coords = useWeather(city).coords;
	const forecast = useForecast(coords);
	const params = useParams()

	console.log("location", location);
	console.log("params", params)
	return (
		<>
			<div className={classes.singlCityWrap}>
				<Card city={city} className={classes.card} />
				<div className={classes.forecastList}>
					{forecast.list &&
						forecast.list.map((elem, index) => (
							<div className={classes.dailyCard}>
								<DailyCard
									weather={elem.weather[0]}
									date={elem.dt}
								/>
							</div>
						))}
				</div>
			</div>
		</>
	);
};

export default SinglCity;
