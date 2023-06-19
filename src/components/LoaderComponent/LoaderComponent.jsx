import React from "react";
import classes from "./LoaderComponent.module.css";

let LoaderCompnent = () => {
	return (
	<div className={classes.obraz}>
		<img src={"https://raw.githubusercontent.com/SamHerbert/SVG-Loaders/master/svg-loaders/tail-spin.svg"}  />
	</div>
	)	
}

export default LoaderCompnent;