import profileReducer, {clickOnPostButton, deletePostById} from "./profile-reducer";
import { render, screen } from '@testing-library/react';


// test('новый пост добавился', () => {
//     let initialState = {
//         postsInMainPage: ["прив"]    
//     }
//     let action = clickOnPostButton("hello")
//     let newState = profileReducer(initialState, action)
//     expect(newState.postsInMainPage[1]).toBe("hello")

// });

test('delete somebody post', () => {
    let initialState = {
        postsInMainPage: ["прив"]    
    }
    let action = deletePostById(0)
    let newState = profileReducer(initialState, action)
    expect(newState.postsInMainPage.length).toBe(0)
   
});

