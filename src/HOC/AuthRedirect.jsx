import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

let mapStateToProps = (state) => {
	return {		
		isAuth: state.auth.isAuth,		
	}
}

let ComponentAuthRedirect = (Component) => ({...props}) => {      
    if (!props.isAuth) return <Redirect to="/login"/>     
    return <Component {...props}/>
};


export let AuthRedirect = (Component) => {
    return connect(mapStateToProps)(ComponentAuthRedirect(Component))
}