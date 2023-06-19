import classes from "./NewYear.module.css";
import React, { Component }  from 'react';

const NewYear = (props) => {
    return (
		<div>
			<textarea className={classes.textArea} 
			rows={props.rows} 
			cols={props.cols} 
			value={props.value}>
			</textarea>	
		</div>
	)}

export default NewYear;