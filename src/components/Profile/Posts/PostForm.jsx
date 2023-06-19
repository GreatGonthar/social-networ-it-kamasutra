import React, { Component }  from 'react';
import { Field, reduxForm } from 'redux-form'
import {required, maxLength} from '../../../utils/validators/validators'
import {FormControls} from '../../FormControls/FormContros'

let maxLength30 = maxLength(30)

const PostForm = (props) => {	        
    const dataFromForm = data => {       
        props.clickOnPostButton(data.postsText)
    }
        return <main>
            <div>
               <h2>посты:</h2>
            </div>
            <PostReduxForm onSubmit={dataFromForm}/>                    	            
        </main>
    }

const Form = (props) => {
    return <div>
        <form onSubmit={props.handleSubmit}>           
            <div><Field placeholder={"текст поста"} component={FormControls} name={"postsText"} validate={[required, maxLength30]}/></div>
			<button>запостить</button>
        </form>     
    </div>
}

let PostReduxForm = reduxForm({   
    form: 'post'
  })(Form)

export default PostForm;

  





