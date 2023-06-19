import React from "react";
import classes from "./Profile.module.css";



class ProfileStatusBar extends React.Component {      
    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {        
        this.setState({
            editMode: true,
        });
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        });
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value,
        }); 
    }
    handleFileUpload = (e) => {
        // e.preventDefault()      
        this.props.updateAva(e.target.files[0])
        console.log(e.target.files[0])
    }



    render() {    
        console.log(this.props)    
        return <div id="testElement">
            {!this.state.editMode &&
            <div className={classes.statusBar}>
                <span onDoubleClick={this.activateEditMode}>{this.state.status}</span>
            </div>}

            {this.state.editMode &&
            <div>
                <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}></input>
            </div>}  
         <form>
            <input type="file" onChange={this.handleFileUpload}/>
            {/* <button onClick={this.handleFileUpload}>отправить</button> */}
        </form>                
        </div>      
    }

    componentDidUpdate(prevProps, prevState){       
        if (this.props.status !== prevProps.status){           
            this.setState({status: this.props.status})
        }

    }
    
};


export default ProfileStatusBar;
