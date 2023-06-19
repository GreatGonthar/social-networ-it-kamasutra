import React, {useState, useEffect} from "react";
// import React, { Component }  from 'react';
import NewYear from "./NewYear.jsx"

const ROWS = 12
const COLS = 25

let myArr = []
for (let i = 0; i < ROWS; i++){
    myArr.push([])
    for (let j = 0; j < COLS; j++){
        myArr[i].push(0)
    }
}

let getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }

  let ourElem = {
    x: 0,
    y: 0,
    symb: 1
}

const NewYearContainer = (props) => {   

    let [status, setStatus] = useState(myArr) 
    let [ourElem, setOurElem] = useState({
            x: 0,
            y: 0,
            symb: 1
        })

    let arrMod= (status) => {  
        let arr = []
        for (let i = 0; i < ROWS; i++){
            arr.push([...status[i]])
        }
        if(ourElem.y != 0){
            if(ourElem.y < ROWS && arr[ourElem.y][ourElem.x] === 0){
                arr[ourElem.y][ourElem.x] = ourElem.symb
                arr[ourElem.y - 1][ourElem.x] = 0
                // setOurElem({...ourElem, y: ourElem.y +1})
                ourElem.y = ourElem.y + 1
            }else {
                // setOurElem({...ourElem, y: 0, x: getRandomInt(COLS), symb: getRandomInt(3)+1})
                ourElem.y = 0
                ourElem.x = getRandomInt(COLS)
                ourElem.symb = getRandomInt(3)+1
            }
        }else{
            arr[ourElem.y][ourElem.x] = ourElem.symb
            // setOurElem({...ourElem, y: ourElem.y +1})
            ourElem.y += 1
        }
        return arr
    }

    let graphickLayer = (myTextArr) => {
        let myTextArrMod = []    
        myTextArr.forEach((item) => {item.forEach((item) => {
        switch(item){
            case 1: {myTextArrMod.push('*') }break
            case 2: {myTextArrMod.push('+')}break
            case 3: {myTextArrMod.push('.')}break
            default: {myTextArrMod.push(' ')}
        }    
        }); 
        myTextArrMod.push("\n")});
        myTextArrMod = myTextArrMod.join('')
        return myTextArrMod
        }

    setTimeout(() => setStatus(arrMod(status)), 50)
    return (
		<div>
			<NewYear
            value = {graphickLayer(status)} 
            rows = {ROWS} 
			cols = {COLS} />            
		</div>
	)
    }

export default NewYearContainer