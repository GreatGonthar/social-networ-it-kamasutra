import React, { Component }  from 'react';
import { Field, reduxForm } from 'redux-form'
import {FormControls} from '../FormControls/FormContros'
import {required, maxLength} from '../../utils/validators/validators'
const maxLength10 = maxLength(10);
const DialogForm = (props) => {	        
    const dataFromForm = data => {
        props.clickOnDialogButton(data.messageText);
        console.log(data)
    }
        return <main>
            <div>
               <h2>сообщение</h2>
            </div>
            <DialogReduxForm onSubmit={dataFromForm}/>                    	            
        </main>
    }

const Form = (props) => {
    return <div>
        <form onSubmit={props.handleSubmit}>
        {/* <textarea onChange={textAreaInConsole} ref={textElement} value={props.usersInfo.newMessageTexts}></textarea>
        
        <button onClick={() => props.clickOnDialogButton()}>отправить</button> */}
        <div><Field placeholder={"текст сообщения"} component={FormControls} name={"messageText"} validate={[required, maxLength10]}/></div>
            <div><button>отправить</button></div>
        </form>     
    </div>
}

let DialogReduxForm = reduxForm({   
    form: 'dialog'
  })(Form)

export default DialogForm;

  





