// import classes from "./NewYear.module.css";
import React, { Component, useState, useEffect }  from 'react'
import classes from './Weather.module.css'
import Input from './Input/Input'
import {CardList} from './CardList/CardList'
import useCitiesList from './hooks/useCitiesList'
import { WithErrorBoundary } from './hocs/WithErrorBoundary'
import { BrowserRouter, Route } from "react-router-dom";
import SinglCity from './SinglCity/SinglCity'

export const GlobalContext =  React.createContext()
const initialState = {
	citiesList: JSON.parse(localStorage.getItem("citiesList")) || [],
	editValue: '',
	editButton: false,
}

const Weather = (props) => {
	const [state, dispatch] = useCitiesList(JSON.parse(localStorage.getItem("citiesList")) || [])	
    return (
		<GlobalContext.Provider value={{state, dispatch}}>
			<Route exact path="/weather">
			<div>
				
				<Input/>
				<WithErrorBoundary>
					<CardList className={classes.cardList}/>
				</WithErrorBoundary>
			</div>
			</Route>
			<Route path="/weather/:singlCity" component={SinglCity}/>
		</GlobalContext.Provider>
	)}

export default Weather;