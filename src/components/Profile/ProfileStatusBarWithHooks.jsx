import React, {useState, useEffect} from "react";
import classes from "./Profile.module.css";

const ProfileStatusBarWithHooks = (props) => {    
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status) 
    
    useEffect(() => {
        setStatus(props.status)
      }, [props.status])

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value) 
    }
    const deactivateEditMode = (e) => {
        setEditMode(false)
        props.updateStatus(status);
    }

    
        return (
        <div id="testElement">
            {!editMode &&
            <div className={classes.statusBar}>
                <span onDoubleClick={() => setEditMode(true)}>{status}</span>
            </div>}

            {editMode &&
            <div>
                <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}></input>
            </div>}  
            <form>
                {/* <input type="file" onChange={this.handleFileUpload}/> */}
                {/* <button onClick={this.handleFileUpload}>отправить</button> */}
            </form>                
        </div>      
        )    
};


export default ProfileStatusBarWithHooks;
