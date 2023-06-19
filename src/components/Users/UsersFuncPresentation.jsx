import React from "react";
import { NavLink } from 'react-router-dom';
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import UsersPagination from "./UsersPagination.jsx";
import * as axios from "axios";
import {usersAPI} from "../../api/api.js"

let UsersFuncPresentation = (props) => {
	
    let pages = [];
		let numbersPage = Math.ceil(props.usersSum / props.pageSize);
		for (let i = 1; i <= numbersPage; i++){
			pages.push(i);
		}		
		return (		
			<div>	
				<UsersPagination 
				currentPage={props.currentPage}
				numbersPage={numbersPage}
				setCurrentPage={props.setCurrentPage}
				changePage={props.changePage}
				firstNumberPanel = {props.firstNumberPanel}
				setFirstNumberPanel = {props.setFirstNumberPanel}
				/>
			
			{		console.log(props.users)}
				
				{props.users.map(u => <div className={classes.users_info}>
					<div>
						<NavLink to={"/Profile/" + u.id}>
							<img src={u.photos.small != null ? u.photos.small : userPhoto} className={classes.ava_picture}/>
						</NavLink>
					</div>
					<div className={classes.users_info_text}>
						<div>Имя: {u.name},</div>
						<div>ID: {u.id},</div>
						<div>Статус: "{u.status || "нет статуса"}",</div>					
						
						{u.followed ? 
						<button disabled = {
								props.followingInProgress == u.id ? true : false
							} onClick={() => {
								props.unfollowThunkCreator(u.id);
							// props.toggleIsFollowingProgress(u.id);
							// usersAPI.unfollowUser(u.id)
							// .then(data => {
							// 	if (data.resultCode == 0){
							// 		props.unfollow(u.id);
							// 	}
							// 	props.toggleIsFollowingProgress(0);
							// })						
						}}>убрать из друзей</button> : 

						<button disabled = {
								props.followingInProgress == u.id ? true : false
							}className={classes.button_follow} onClick={() => {
								props.followThunkCreator(u.id);

							// props.toggleIsFollowingProgress(u.id);
							// usersAPI.followUser(u.id)
							// .then(data => {										
							// 	if (data.resultCode == 0){
							// 		props.follow(u.id);
							// 	}	
							// 	props.toggleIsFollowingProgress(0)							
							// });							
							}}>добавить в друзья</button>}

					</div>
					
					</div>)}
			</div>
			
		)
}

export default UsersFuncPresentation;