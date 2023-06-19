import classes from "./Post.module.css";
import React, { Component }  from 'react';

window.props = []
const OnePost = (props) => {
	window.props.push(props)
	console.log(props);
	return (
		<div className={classes.Pcolor}>
			<img src={props.ava} className={classes.miniAva}></img>
			<div>
				{props.textFish + " "}						
					<span className={classes.like}>
					{'\u2665'}
					{" " + props.likeCount}
				</span>
			</div>
		</div>

	)
}
export default OnePost;