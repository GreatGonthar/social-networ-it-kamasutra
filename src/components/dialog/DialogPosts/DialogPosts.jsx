import classes from "./DialogPosts.module.css";
import React, { Component }  from 'react';


const DialogPosts = (props) => {
	return (
		<div className={classes.textPost}>
			{props.text}
		</div>

	)
}
export default DialogPosts;