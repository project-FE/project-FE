import {createAction, handleActions} from "redux-actions";
import {produce} from "immer";
import axios from 'axios';

// *** 액션 타입
const CREATE_POST = "CREATE_POST";
const EDIT_POST = "EDIT_POST";

// *** 액션 생성 함수
const createPost = createAction(CREATE_POST, () => ({}));
const editPost = createAction(EDIT_POST, () => ({}));

// *** 초기값
const initialState = {
    list: []
}

// *** 미들웨어 

//*** 리듀서
export default handleActions({
    [CREATE_POST]: (state, action) => produce(state, (draft) => {
        draft = action.payload;
    }),
    [EDIT_POST]: (state, action) => produce(state, (draft) => {
        draft = action.payload;
        console.log(action.payload)
    })
}, initialState)

const actionCreators = {

}

export {
    actionCreators
}