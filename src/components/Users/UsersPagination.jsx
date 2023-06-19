import React from "react";
import classes from "./UsersPagination.module.css";


let UsersPagination = (props) => {   
    let pagePanelArr = [];   
    let i = props.firstNumberPanel    
    for (i; i <= props.firstNumberPanel + 7; i++){
        pagePanelArr.push(i);
    }
    return (
<div>			
    <div className={classes.pagination}>
        <ul> 

        <li className={pagePanelArr[0] > 1 ? (classes.btn+ " " +classes.prev):(classes.btn+ " " +classes.blure)} 
              onClick = {() => {props.setFirstNumberPanel(props.firstNumberPanel-8); 
                                props.setCurrentPage(props.firstNumberPanel-8);
                                props.changePage(props.firstNumberPanel-8);
            }}>
        <span><i className={classes.fas+ " " +classes.faAngleLeft}></i>{"prev"}</span></li>
                       

        {pagePanelArr.map(elem => {
            return (
                <li className={classes.numb + " " + (elem == props.currentPage && classes.active)}
                    onClick = {() => {props.setCurrentPage(elem); 
                                    props.changePage(elem);
                                    }}>
                <span>{elem}</span></li>
            )
        })}
           

        {props.currentPage < props.numbersPage-8 ? <li className={classes.dots}><span>...</span></li>: null}
        {/* <li className={props.currentPage < props.numbersPage-8 ? classes.dots: classes.blure}>...</li> */}
        {/* <li className={classes.dots}><span>{props.currentPage < props.numbersPage-8 ? "..." : ""}</span></li> */}

        <li className={classes.numb}
                onClick = {() => {props.setCurrentPage(props.numbersPage); 
                                props.changePage(props.numbersPage);
                                props.setFirstNumberPanel(props.numbersPage-8)
                                }}>            
                <span>{props.numbersPage}</span></li>

        <li className={classes.btn+ " " +classes.next}
                onClick = {() => {props.setFirstNumberPanel(props.firstNumberPanel+8); 
                                props.setCurrentPage(props.firstNumberPanel+8);
                                props.changePage(props.firstNumberPanel+8);
                                }}>
                <span><i className={classes.fas+ " " +classes.faAngleLeft}></i>{"next"}</span></li>

        </ul> 
    </div>
</div>        

    )
}

export default UsersPagination;