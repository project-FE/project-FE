import React, { useState, useEffect } from 'react';
import CommentsItem from './CommentsItem';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as commentActions } from '../redux/modules/comment';


const CommentsList = (props) => {
    
    const dispatch = useDispatch();
    const comments = useSelector(state => state.comment.list);
    // console.log("코멘트",comments)
    const [user, setUser] = useState(["test"])
    // const [comments, setComments] = useState([
    //     {
    //         profileImg:"https://t1.daumcdn.net/cfile/blog/2259734454E2F8CF10",
    //         nickname:"Mazayong",
    //         comments:"테스트 코멘트 1"
    //     },
    //     {
    //         profileImg:"https://t1.daumcdn.net/cfile/blog/265A394454E2F8D011",
    //         nickname:"Zammanbo",
    //         comments:"테스트 코멘트 2"
    //     },
    //     {
    //         profileImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT78NOnVEEqW_deq1rqknbdSFUd4zqmBKUI4N5qHwpU3OAbiF0uzwX1mYfkrSKSjHNfOao&usqp=CAU",
    //         nickname:"Ggoboogi",
    //         comments:"테스트 코멘트 3"
    //     },
    //     {
    //         profileImg:"https://t1.daumcdn.net/cfile/tistory/244BFB405474100E20",
    //         nickname:"YisangHaeC",
    //         comments:"테스트 코멘트 4"
    //     }
    // ])

    // useEffect(() => {
    //   dispatch(commentActions.getComment(
    //     brand_list ? brand_list[list_id].restaurantTitle : "",
    //     user
    //     ));
    // },[]);
    
    return (
        <div>
            {
                comments.map((e,i)=>{
                    return(
                        <CommentsItem key={i} {...e}/>
                    )
                })
            }
        </div>
    );
};

export default CommentsList;