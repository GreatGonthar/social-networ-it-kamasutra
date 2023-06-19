import React from 'react';
import classes from "./Dialog.module.css";
import User from './User/User.jsx'
import DialogPosts from './DialogPosts/DialogPosts.jsx' 
import DialogForm from './DialogForm.jsx' 


let userName = (word) => {	
	word = word.split("");
	word[0] = word[0].toUpperCase();
	return word = word.join("");
}

const Dialog = (props) => {		
    return (
		<div className={classes.container}>
			<div className={classes.users}>
				<b>Users: </b>				
				{props.usersInfo.usersNameArr.map((elem, i) => <User name={userName(elem)} id = {i+1} ava={props.usersInfo.userAva[i]}/>)}
			</div>
			<div className={classes.dialogs}>				
				{props.usersInfo.textPostsArr.map(elem => <DialogPosts text={elem}/>)}
			</div>
			<div className={classes.textPost}>
				<DialogForm {...props}/>
			</div>
		</div>
	)}

export default Dialog;
