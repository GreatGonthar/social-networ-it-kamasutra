import logo from "./logo.svg";
import React, { Component } from "react";

import "./App.css";
import {HashRouter, BrowserRouter, Route } from "react-router-dom";
import Zpp from "./Zpp.js";
import HeaderContainer from "./components/header/HeaderContainer.jsx";
import Nav from "./components/nav/Nav.jsx";
import ProfileContainer from "./components/Profile/ProfileContainer.jsx";
import NewYearContainer from "./components/NewYear/NewYearContainer.jsx";
import Weather from "./components/Weather/Weather";
import Close from "./components/Close/Close.jsx";
import Login from "./components/Login/Login.jsx";
import { connect } from "react-redux";
import { initializeThunkCreator } from "./redux/app-reducer";
import LoaderCompnent from "./components/LoaderComponent/LoaderComponent";
import { lazy, Suspense } from "react";
// import state from './redux/state.js'

const DialogContainer = lazy(() =>
	import("./components/dialog/DialogContainer.jsx")
);
const UsersContainer = lazy(() =>
	import("./components/Users/UsersContainer.jsx")
);

class App extends Component {
	componentDidMount() {
		this.props.initializeThunkCreator();
	}

	render() {
		// 	if(!this.props.initialized){
		// 		return <LoaderCompnent/>
		// 	}
		// else return (
		return (
			<HashRouter>
				<div className="App">
					<HeaderContainer {...this.props} />
					<Nav />
					<div className="mainContent">
						<Route
							exact
							path="/"
							render={() => (
								<ProfileContainer
								// store={props.store}
								/>
							)}
						/>

						<Route
							path="/messages"
							render={() => (
								<Suspense fallback={<div>....loading</div>}>
									<DialogContainer />
								</Suspense>
							)}
						/>
						<Route
							path="/profile/:userId?"
							render={() => (
								<ProfileContainer
								// store={props.store}
								/>
							)}
						/>

						<Route
							path="/Users"
							render={() => (
								<Suspense fallback={<div>....loading</div>}>
									<UsersContainer />
								</Suspense>
							)}
						/>
						<Route path="/NewYear" component={NewYearContainer} />
						<Route path="/Weather" component={Weather} />
						<Route path="/Close" component={Close} />
						<Route path="/Login" component={Login} />
					</div>
				</div>
			</HashRouter>
		);
	}
}

let mapStateToProps = (state) => {
	return { initialized: state.app.initialized };
};
export default connect(mapStateToProps, { initializeThunkCreator })(App);
