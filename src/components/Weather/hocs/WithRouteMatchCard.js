import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

export const WithRouteMatchCard = (Component) => (props) => {
	const isWeather = useRouteMatch("/weather");

	if (isWeather.isExact) {
		return (
			<>
				<Link
					to={`weather/${props.city}`}
					style={{ textDecoration: "none", color: "white" }}
				>
					<Component {...props} />
				</Link>
			</>
		);
	} else {
		return (
			<>
				<Link
					to={`/weather`}
					style={{ textDecoration: "none", color: "white" }}
				>
					<Component {...props} />
				</Link>
			</>
		);
	}
};
