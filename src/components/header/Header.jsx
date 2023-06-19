import React, { Component }  from 'react';
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css"

const logo2 = "https://api.freelogodesign.org/assets/thumb/logo/23137835_400.png";

const Header = (props) => {
	return (
		<header className={classes.header}>
			<img src={logo2}></img>
			<div className={classes.loginBlock}>
				{props.login ? 
				<div>залогинен как {props.login} <button onClick={props.logoutThunkCreator}>выйти</button></div>:
				<NavLink to={"/login"}>надо залогинится</NavLink>}
			</div>
		</header>
	)
}

export default Header;