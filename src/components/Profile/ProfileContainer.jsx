import Profile from "./Profile.jsx"
import React from "react";
import * as axios from "axios";
import {getProfileThunkCreator, getProfileStatusThunkCreator, updateProfileStatusThunkCreator, updateAvaThunkCreator} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import {AuthRedirect} from "../../HOC/AuthRedirect"
import { compose } from "redux";

// import store from "../../redux/store";

let mapStateToProps = (state) => {
    return {
			profile: state.profile.profile,	
			status: state.profile.status,
			isAuth: state.auth.isAuth,
			autorisedUserId: state.auth.userId, 			
        }
}

class ProfileContainer extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount(){		
		let userId = this.props.match.params.userId || this.props.autorisedUserId;
			
		this.props.getProfileThunkCreator(userId);		
		this.props.getProfileStatusThunkCreator(userId);		
	}

	render() {				
		return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateProfileStatusThunkCreator} updateAva={this.props.updateAvaThunkCreator}/> 
	}
}

export default compose(
	connect(mapStateToProps, {getProfileThunkCreator, getProfileStatusThunkCreator, updateProfileStatusThunkCreator, updateAvaThunkCreator}),
	AuthRedirect,
	withRouter
	)(ProfileContainer);

