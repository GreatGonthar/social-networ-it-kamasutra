import { LoremIpsum } from "lorem-ipsum";

const TEXT_FROM_TEXTAREA_TO_DIALOG = "TEXT-FROM-TEXTAREA-TO-DIALOG";

let lorem = new LoremIpsum();

let initialState = {
    usersNameArr: [
        lorem.generateWords(1),
        lorem.generateWords(1),
        lorem.generateWords(1),	
    ],
    userAva: [
        "https://mir-s3-cdn-cf.behance.net/project_modules/disp/10f13510774061.560eadfde5b61.png",
        "https://avatarfiles.alphacoders.com/209/thumb-209797.jpg",
        "https://i1.sndcdn.com/avatars-000547985256-ntiz46-t500x500.jpg"
    ],
    textPostsArr: [
        lorem.generateSentences(3),
        lorem.generateSentences(3),
        lorem.generateSentences(3),
        lorem.generateSentences(3)
    ],
}

const messageReducer = (state = initialState, action) => {
    switch(action.type){
        case TEXT_FROM_TEXTAREA_TO_DIALOG:  {
            let stateCopy = {...state};
            stateCopy.textPostsArr = [...state.textPostsArr]
            stateCopy.textPostsArr.push(action.text);            
            return stateCopy;
        }

        default: return state; 
    }
}

export default messageReducer;
export const clickOnDialogButton = (text) => ({type: TEXT_FROM_TEXTAREA_TO_DIALOG, text});