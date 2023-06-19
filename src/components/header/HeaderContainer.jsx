import Header from "./Header.jsx"
import React from "react";
import * as axios from "axios";
import {connect} from "react-redux"
import {setAuthUserData, getAuthUserDataThunkCreator} from "../../redux/auth-reducer.js"
import {logoutThunkCreator} from '../../redux/auth-reducer'
import {authMeAPI} from "../../api/api.js"

class HeaderContainer extends React.Component {
	render () {		
		return	<Header {...this.props}/>
	}
}

const mapStateToProps = (state) => ({
	email: state.auth.email,
    userId: state.auth.userId,
    login: state.auth.login,
    isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, {logoutThunkCreator})(HeaderContainer);