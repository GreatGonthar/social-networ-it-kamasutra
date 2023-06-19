import classes from "./Profile.module.css";
import PostsContainer from "./Posts/PostsContainer.jsx";
import userPhoto from "../../assets/images/user.png"
import { Redirect } from "react-router-dom";
import React, { Component }  from 'react';
import ProfileStatusBarWithHooks from "./ProfileStatusBarWithHooks.jsx"

const Profile = (props) => {	
// alert(JSON.stringify(props))
	
    return <main>
		<div>
			<img src="https://adultmult.club/images/bricks-bg.jpg" 
			className={classes.navBackground}></img>
		</div>
		<div className={classes.userInfo}>
			<div>
				<img src={props.profile.photos.large || userPhoto} className={classes.avatar}></img>
			</div>
			<div>
				<div>{"fullName: " + props.profile.fullName}</div>
				<div>{"About Me: " + props.profile.aboutMe}</div>
				<div>{"userId: " + props.profile.userId}</div>
					<div>
						<ProfileStatusBarWithHooks status={props.status} updateStatus={props.updateStatus} updateAva={props.updateAva}/>
					</div>
			</div>			
		</div>	
	
		<PostsContainer />
	</main>
}

export default Profile;