import React, { useContext } from "react";
import { GlobalContext } from "../Weather";

export class WithErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { error: null };
	}

	componentDidCatch(error, errorInfo) {
		console.log("errorInfo", errorInfo);
		this.setState({ error });
	}
	render() {		
		if (this.state.error) {
			return <div>component has crased</div>;
		} else {
			return this.props.children;
		}
	}
}
