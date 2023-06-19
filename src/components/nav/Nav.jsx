import React, { Component }  from 'react';
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import classes from "./Nav.module.css"

const Nav = () => {
    return <nav className={classes.nav}>
        <NavLink to="/profile" className={classes.default} activeClassName={classes.active}>Profile</NavLink>
        <NavLink to="/messages" className={classes.default} activeClassName={classes.active}>Messages</NavLink>
        <NavLink to="/Users" className={classes.default} activeClassName={classes.active}>Users</NavLink>
        <NavLink to="/NewYear" className={classes.default} activeClassName={classes.active}>NewYear 2023</NavLink>
        <NavLink to="/weather" className={classes.default} activeClassName={classes.active}>Weather</NavLink>
        <NavLink to="/Close" className={classes.default} activeClassName={classes.active}>Close</NavLink>

    </nav>
}

export default Nav;