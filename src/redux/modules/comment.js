import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
// import axios from "axios";
// import { getCookie } from "../../shared/Cookie";

// 액션
const GET_COMMENT = "GET_COMMENT";
const ADD_COMMENT = "ADD_COMMENT";

// 액션크리에이터
const getComment = createAction(GET_COMMENT, (comment_list) => ({ comment_list }));
const addcomment = createAction(ADD_COMMENT, (comments) => ({comments}));

// 초기값 

const initialState = {
  list : [
    {
        profileImg:"https://t1.daumcdn.net/cfile/blog/2259734454E2F8CF10",
        nickname:"Mazayong",
        comments:"테스트 코멘트 1"
    },
    {
        profileImg:"https://t1.daumcdn.net/cfile/blog/265A394454E2F8D011",
        nickname:"Zammanbo",
        comments:"테스트 코멘트 2"
    },
    {
        profileImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT78NOnVEEqW_deq1rqknbdSFUd4zqmBKUI4N5qHwpU3OAbiF0uzwX1mYfkrSKSjHNfOao&usqp=CAU",
        nickname:"Ggoboogi",
        comments:"테스트 코멘트 3"
    },
    {
        profileImg:"https://t1.daumcdn.net/cfile/tistory/244BFB405474100E20",
        nickname:"YisangHaeC",
        comments:"테스트 코멘트 4"
    }
  ]
}

// 미들웨어


//추가분//
// export const getCommentDB = (postId) => {
//   return async function(dispatch, getState, {history}) {
//     const myToken = getCookie("Authorization",
//     )
//     await axios.get(`http://13.209.83.26/posts/${postId}`
//     ,{headers : {"Authorization" : `${myToken}`}},
//     )
//     .then((res) => {
//       console.log("res.data?",res.data)
//       dispatch(getComment(res.data.body.commentDtoList));
//     })
//     .catch((err)=> {
//       console.log(err);
//     })
//   }
// }
//추가분//





// export const __addcomment = (postid, comments) => {
//   return function (dispatch, getState, {history}) {
//     const myToken = getCookie("Authorization",)
//     console.log(postid, comments)
//     axios.post('http://13.209.83.26/comment',{
//       postid : postid,
//       comments : comments,
//     },
//     {headers : {'Authorization' : `${myToken}`}}
//     )
//     .then((response) => {
//       console.log("리스폰",response)
//       dispatch(addcomment(response.data));
//     })
//     .catch((err) => {
//       console.log(err);
//     })
//   }
// };


//리듀서 

export default handleActions(
  {
    [GET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        // draft.list = [];
        console.log("get_comment 리듀서 실행");
        // console.log("액션",action);
        draft.list = action.payload.comment_list;
        // console.log("드래프트",draft.list);

    }),
    [ADD_COMMENT]: (state, action) =>
        produce(state, (draft) => {
          console.log(state, action)
          draft.list.unshift(action.payload.comment);
        }),
        
  },
  initialState
);

const actionCreators = {
    getComment,
    addcomment,
  };

export { actionCreators };