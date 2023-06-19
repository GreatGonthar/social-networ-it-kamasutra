import classes from "./Posts.module.css";
import Posts from "./Posts.jsx";
import React from 'react';
import {clickOnPostButton} from '../../../redux/profile-reducer.js';
import {connect} from "react-redux";

let mapStateToProps = (state) => {
	return {
		profile: state.profile,		
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		clickOnPostButton: (text) => dispatch(clickOnPostButton(text))
	}
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;