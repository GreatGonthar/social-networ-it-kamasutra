import React from 'react';
import classes from "./FormControls.module.css"

export const FormControls = ({input, meta, ...props}) => {      
    const hasError = meta.touched && meta.error
    return (
        <div>            
            <textarea {...input} {...props} className={hasError ? classes.error : ""}/>
            <div>
                {hasError && <span className={classes.error}>{meta.error}</span>}
            </div>
        </div>
    )
}

export const Input = ({input, meta, ...props}) => {      
    const hasError = meta.touched && meta.error
    return (
        <div>            
            <input {...input} {...props} className={hasError ? classes.error : ""}/>
            <div>
                {hasError && <span className={classes.error}>{meta.error}</span>}
            </div>
        </div>
    )
}