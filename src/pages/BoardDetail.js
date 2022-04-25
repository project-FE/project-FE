import React, { useState, useEffect } from 'react';
import CommentsList from '../components/CommentsList';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { actionCreators as commentActions } from '../redux/modules/comment';


const BoardDetail = (props) => {
    const dispatch = useDispatch();
    const [comments, setComments] = useState("");   
    // console.log(comments)

    
    const commentAdd = () => {
        
            dispatch(commentActions.addcomment(comments))
            console.log(comments)
        // window.location.reload()
        
        
    }

    const click = (e) =>{

           console.log(comments) 
        
        
    }
    const handleComm = (e) => {
        
        console.log(e.target.value)
        setComments(e.target.value)
        
    }

    // const addComment = ()=>
    return (
        <div>
            <InputComment onChange={handleComm}/>
            <BtnComment onClick={commentAdd}>작성</BtnComment>
            <CommentsList />
        </div>
    );
};

const InputComment =  styled.input`
    width:80%;
    max-width:1000px;
    height : 23px;
    margin-top:50vh;

`
const BtnComment = styled.button`
    height : 30px;
    margin-left:5px;
`


export default BoardDetail;