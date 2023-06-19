import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import classes from "./User.module.css";
import React, { Component }  from 'react';


const User = (props) => {
	return (
		<div className={classes.user}>
			<img src={props.ava} className={classes.miniAva}></img>
			<NavLink to={"/messages/" + props.id} className={classes.user}>
				{props.name} 
			</NavLink>
		</div>

	)
}
export default User;