import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppWithConnect from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store.js';
import {Provider} from "react-redux";

import { getFormInitialValues } from 'redux-form';


// let renderer = (state) => {

ReactDOM.render(
	<Provider store={store}>
		<AppWithConnect/>
	</Provider>
	, document.getElementById('root'));
	
// }
// renderer(store.getState());
// store.subscribe(() => {renderer(store.getState())});

// email: gontharforeverrules@gmail.com
// password: iopiopio