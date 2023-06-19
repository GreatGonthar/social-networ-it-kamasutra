import React, { useEffect, useState, useContext, useRef, memo } from "react";
import classes from "./Card.module.css";
import { GlobalContext } from "../Weather";
import { Link, useHistory, useRouteMatch } from "react-router-dom";
import { WithRouteMatchCard } from "../hocs/WithRouteMatchCard";
import useWeather from "../hooks/useWeather";

const CardNoButtons = ({ city }) => {
	const weatherData = useWeather(city);

	return (
		<>
			<div className={classes.mainInfo}>
				{weatherData.temp !== "ERROR" ? (
					<img
						className={classes.icon}
						src={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
						alt="icon"
					/>
				) : (
					<img
						className={classes.icon}
						src="https://avatars.ubisoft.com/d45bb510-b93a-4988-a58b-ab1e99394dc8/default_256_256.png"
						alt="error"
					/>
				)}
				<div className={classes.title}>{city}</div>
				<div className={classes.description}>
					{weatherData.description}
				</div>
				<div className={classes.temperature}>{weatherData.temp}</div>
			</div>
			<div className={classes.information}>
				<div>Humidite: {weatherData.humidity}</div>
				<div>Feels like: {weatherData.feels_like}</div>
			</div>
		</>
	);
};
const Buttons = ({ city, isWeather }) => {
	// const buttonRef = useRef({});
	const { state, dispatch } = useContext(GlobalContext);
	const ourHistory = useHistory();
	const editOnClick = (value) => {
		dispatch({ type: "EDIT_TARGET_CITY", payload: value });
		dispatch({ type: "INPUT_FOR_EDIT_BUTTON", payload: true });
	};

	console.log("isWeather", isWeather);

	return (
		<>
			{isWeather && (
				<div className={classes.closeBtn}>
					<button
						onClick={(e) => {
							e.preventDefault();
							e.stopPropagation()
							editOnClick(city);
						}}
					>
						edit
					</button>
					<button
						onClick={(e) => {
							e.preventDefault();
							e.stopPropagation()
							dispatch({
								type: "REMOVE_TARGET_CITY",
								payload: city,
							});
						}}
					>
						X
					</button>
				</div>
			)}
		</>
	);
};

const CardNoMemo = ({ city, setCoords }) => {
	const isWeather = useRouteMatch("/weather");

	return (
		<>
			<div className={classes.card}>
				<Link
					to={`/weather/${isWeather.isExact ? city : ""}`}
					style={{ textDecoration: "none", color: "white" }}
				>
					<Buttons city={city} isWeather={isWeather.isExact} />
					<CardNoButtons city={city} setCoords={setCoords} />
				</Link>
			</div>
		</>
	);
};

const Card = memo(CardNoMemo);
export default Card;
