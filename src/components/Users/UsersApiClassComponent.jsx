
import * as axios from "axios";

import {usersAPI} from "../../api/api.js"
import React from "react";
import UsersFuncPresentation from "./UsersFuncPresentation"
import LoaderCompnent from "../LoaderComponent/LoaderComponent.jsx"

class UsersApiClassComponent extends React.Component {
	constructor(props) {
		super(props);

	}
	componentDidMount(){		
		this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);		
		// this.props.setIsFetching(true);
		
		// usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
		// .then(data => {				
		// 	this.props.setIsFetching(false);
		// 	this.props.setUsers(data.items);			
		// 	this.props.setUsersSum(data.totalCount);
		// });
	}
	changePage = (pageNumber) => {

		this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
		// this.props.setIsFetching(true);			
		// usersAPI.getUsers(pageNumber, this.props.pageSize)		
		// .then(data => {		
		// 	this.props.setIsFetching(false);		
		// 	this.props.setUsers(data.items);			
		// });
	}

	render(){			
		return <>
		{this.props.isFetching ?  
		<LoaderCompnent/> : null}
			<UsersFuncPresentation {...this.props} changePage = {this.changePage}/>		
		</>
	}
}

export default UsersApiClassComponent;