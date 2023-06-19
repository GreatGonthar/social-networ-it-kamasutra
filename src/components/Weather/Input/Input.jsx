import React, { Component, useState, useRef, useMemo, useEffect, useContext }  from 'react'
import { GlobalContext } from '../Weather'
import classes from './Input.module.css'

const Input = (props) => {
	const {state, dispatch} = useContext(GlobalContext)
	const [inputValue, setInputValue] = useState(state.editValue)

	const inputRef = useRef("")
	// const memo = useMemo(() => {console.log(inputValue + 3)}, [inputValue])
	const handleOnChange = (e) => {
		setInputValue(e.target.value)	
		// dispatch({type: "EDIT_TARGET_CITY", payload: e.target.value})	
	}
	const handleOnClick = (value) => {		
		dispatch({type: "ADD_CITY", payload: value})		
		setInputValue("")
		inputRef.current.focus()
	}
	const handleOnClickEdit = (value) => {		
		dispatch({type: "UPDATE_CITY_IN_CARD", 
					payload: {oldCity: state.editValue, newCity: value}})	
		dispatch({type: "INPUT_FOR_EDIT_BUTTON", payload: false})
		setInputValue("")
		inputRef.current.focus()
	}
	const handleOnClickRemove = () => {
		dispatch({type: "REMOVE_CITY"})
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		console.log("form Submit")
	}	
	useEffect(() => {
		setInputValue(state.editValue)
		inputRef.current.focus()
	}, [state.editValue])
    return (
			<form onSubmit={handleSubmit}>
		<div className={classes.inputWrap}>
				<input type="text" 
						className={classes.input} 
						onChange={handleOnChange} 
						value={inputValue}
						ref={inputRef}
						/>
				{!state.editButton 
				?
            	<button className={classes.button} onClick={() => handleOnClick(inputValue)}>+</button>
				:
				<button className={classes.button} onClick={() => handleOnClickEdit(inputValue)}>edit</button>
				}
				<button className={classes.buttonMinus} onClick={() => handleOnClickRemove()}>-</button>
		</div>
			</form>
	)}

export default Input;