
// import {renderer} from '../render.js'
import { LoremIpsum } from "lorem-ipsum";
import { useReducer } from "react/cjs/react.production.min";
import profileReducer from "./profile-reducer.js"
import messageReducer from "./message-reducer.js"
// lorem.generateWords(1);
// lorem.generateSentences(5);
// lorem.generateParagraphs(7);
let lorem = new LoremIpsum();

let store = {
    _state: {
        messages: {
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
            newMessageTexts: "",
            textPostsArr: [
                lorem.generateSentences(3),
                lorem.generateSentences(3),
                lorem.generateSentences(3),
                lorem.generateSentences(3)
            ],
        },
        profile: {
            myAva: "https://s1.narvii.com/image/ryjgek6wsqpdydpjxwl5xm3irpibcxzc_hq.jpg",
            newPostTexts:"",    
            postsInMainPage: [
                "прив",
                "как",
                "дел"
            ],
        },
    },
    getState() {
        return this._state
    },
    renderer(state) {
        console.log("пустая функция которая заменится observer'ом")
    }, 
    subscribe(observer) {
        this.renderer = observer;
    },
    dispatch(action) {
        this._state.profile = profileReducer(this._state.profile, action);
        this._state.messages = messageReducer(this._state.messages, action);
        this.renderer(this._state);
    },
}

window.store = store;
export default store;