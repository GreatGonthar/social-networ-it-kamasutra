import React, { useEffect, useState, useContext, useRef, memo } from "react";
import classes from "./DailyCard.module.css";


const DailyCard = (props) => {
	let weather = props.weather
	let date = new Date(props.date*1000)
	date = date.toString().split(' ')

	return (
		<>
			<div className={classes.mainInfo}>				
					<img
						className={classes.icon}
						src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
						alt="icon"
					/>

				<div className={classes.weatherMain}>{weather.main}</div>
				<div className={classes.date}>{date[0]}</div>
				<div className={classes.date}>{`${date[2]} ${date[1]} ${date[3]}`}</div>
				<div className={classes.date}>{date[4]}</div>
			</div>
		</>
	);
};

export default DailyCard;
