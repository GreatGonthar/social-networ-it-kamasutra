import classes from "./Posts.module.css";
import OnePost from "./Post/Post.jsx";
import PostForm from "./PostForm.jsx";
import React, {Component} from 'react';

const Posts = (props) => {
	return (	
		<div className={classes.shadow}>		
			<PostForm {...props} />
			{props.profile.postsInMainPage.map((elem, i) => <OnePost 
			textFish = {elem} likeCount={i} ava={props.profile.profile.photos.small} />)}
		</div>
		)			
	}


export default Posts;