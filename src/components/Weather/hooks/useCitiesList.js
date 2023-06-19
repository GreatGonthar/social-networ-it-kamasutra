// import classes from "./NewYear.module.css";
import React, { useEffect, useReducer }  from 'react'


const initialState = {
	citiesList: JSON.parse(localStorage.getItem("citiesList")) || [],
	editValue: '',
	editButton: false,
}
const reducer = (state, action) => {
	switch (action.type){
		case "ADD_CITY": {
			return {...state, citiesList: [...state.citiesList, action.payload]}
		}
		case "REMOVE_CITY": {
			let newArr = [...state.citiesList]
			newArr.pop()
			return {...state, citiesList: newArr}
		}
		case "REMOVE_TARGET_CITY": {
			let arr = [...state.citiesList].filter(elem => elem !== action.payload)
			return {...state, citiesList: arr}
		}
		case "EDIT_TARGET_CITY": {
			return {...state, editValue: action.payload}
		}
		case "INPUT_FOR_EDIT_BUTTON": {
			return {...state, editButton: action.payload}
		}
		case "UPDATE_CITY_IN_CARD": {
			console.log("old and new cities", action.payload)
			let arr = [...state.citiesList].map(elem => (
				elem = elem === action.payload.oldCity ? 
				action.payload.newCity :
				elem)
			)
			return {...state, citiesList: arr, editValue: ""}
		}
		default: {
			return state
		}
	}
}
const useCitiesList = (initialCitiesList) => {
	const [state, dispatch] = useReducer(reducer, {...initialState, citiesList: [...initialCitiesList]})	
	const {citiesList} = state

	useEffect(() => {		
		localStorage.setItem("citiesList", JSON.stringify(citiesList))
	}, [citiesList])		
    return (
        [state, dispatch]
	)}

export default useCitiesList;