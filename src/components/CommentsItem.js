import React, { useState } from 'react';
import styled from 'styled-components';


const CommentsItem = (props) => {
    // console.log("프롭스",props)
    const [user, setUser] = useState(["test"])
    
    // console.log(props.profileImg)
    return (
        <CommentWrap>
            <ProfileWrap>
                <ImageCircle src={props.profileImg}/>
                <NickName>{props.nickname}</NickName>
            </ProfileWrap>
            
            <commWrap>    
                <Comm>{props.comments}</Comm>
            </commWrap>
        </CommentWrap>
    );
};



const CommentWrap = styled.div`
    margin: 0 auto;
    margin-bottom: 0px;
    margin-top: 10px;
    width: 100%;
    max-width: 980px;
    display: block;
    // justify-content: space-between;
    align-items: center;
    padding : 0px 5px 5px 10px
`
const commWrap = styled.div`
    display: block;
`
const ProfileWrap = styled.div`
    display:flex;
    align-items: left;
    text-align: left;
`

const ImageCircle = styled.div`
    --size: 40px;
    width: var(--size);
    height: var(--size);
    border-radius: var(--size);
    background-image: url("${(props) => props.src}");
    background-size: cover;
    margin: 4px;
    background-position : 20% 70%
`
const NickName = styled.p`
    font-weight:bold;
    margin-left:5px;
`
const Comm = styled.p`
    font-weight:500;
    justify-content: start;
    align-items: start;
    text-align: start;
    margin-top:0px
`

export default CommentsItem;