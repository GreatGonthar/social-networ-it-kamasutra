import React from 'react';
import classes from "./Dialog.module.css";
import User from './User/User.jsx'
import Dialog from './Dialog.jsx' 
import {BrowserRouter, Route} from "react-router-dom";
import store from '../../redux/store.js'
import {updateTextAreaDialog, clickOnDialogButton} from '../../redux/message-reducer.js'
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {AuthRedirect} from '../../HOC/AuthRedirect';
import { compose } from 'redux';


// const DialogContainer = () => {
// 	return (
// 		<storeContext.Consumer>{
// 			(store) => {
// 					return <Dialog dispatch={store.dispatch} usersInfo={store.getState().messages}/>
// 				}
// 			}			
// 		</storeContext.Consumer>
		
// 	)	
// }
let mapStateToProps = (state) => {
	return {
		usersInfo: state.messages,		
	}
}

let mapDispatchToProps = (dispatch) => {
	return {			
		clickOnDialogButton: (text) => dispatch(clickOnDialogButton(text)),
	}
}

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	AuthRedirect
	)(Dialog);



