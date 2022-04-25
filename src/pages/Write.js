import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { actionCreators as postAction } from "../redux/modules/post";

function Write() {
    const dispatch = useDispatch();

    const [change, setChange] = useState(null);
    
    const changeVote = (Vote) => {
        setChange(Vote)
    }
    const changeCon = (Contents) => {
        setChange(Contents)
    }
    console.log(change)

    //카테고리
    const category = [
        "음식",
        "패션·뷰티",
        "진로",
        "연애",
        "문화생활",
        "테크",
        "기타"
    ]
    const [Choice, setChoice] = useState();
    const Categorys = (radioBtnName) => {
        setChoice(radioBtnName)
    }
    console.log(Choice)
    
    //투표 인풋값
    const [voteTitle, setVotetitle] = useState();
    const titleVote = (e) => {
        setVotetitle(e.target.value)
    }

    const [voteOption1, setVoteOption1] = useState();
    const optionVote1 = (e) => {
        setVoteOption1(e.target.value)
    }

    const [voteOption2, setVoteOption2] = useState();
    const optionVote2 = (e) => {
        setVoteOption2(e.target.value)
    }

    //상담게시판 인풋값
    const [contentsTitle, setContentsTitle] = useState();
    const titleContents = (e) => {
        setContentsTitle(e.target.value)
    }

    const [Content, setContent] = useState();
    const Contents = (e) => {
        setContent(e.target.value)
    }

    //이미지
    const [showImages, setShowImages] = useState([]);


    // 이미지 상대경로 저장
    const handleAddImages = (event) => {
        const imageLists = event.target.files; //한번에 받음 파일리스트
        let imageUrlLists = [...showImages]; //showImages 복사

        for (let i = 0; i < imageLists.length; i++) {
            const currentImageUrl = URL.createObjectURL(imageLists[i]);
            imageUrlLists.push(currentImageUrl);
        }
        //imageLists object를 i를 이요해서 돌리면서 미리보기 가능하게 변수화처리 후 복사한 showImages에 추가

        if (imageUrlLists.length > 5) {
            imageUrlLists = imageUrlLists.slice(0, 5);
        }
        //최대 업로드 할 수 있는 이미지를 5개로 제한

        setShowImages(imageUrlLists);
        //imageUrlLists 원본 덮어씌우기
    };

    // X버튼 클릭 시 이미지 삭제
    const handleDeleteImage = (id) => {
        setShowImages(showImages.filter((_, index) => index !== id));
    };

    const saveBtn = () => {
        dispatch()
    }
    return (
        <React.Fragment>
            <div className='vote'>
                <input type="radio" id="vote" name="ex_rds" onClick={() => changeVote("vote")}/>
                <label for="vote">투표</label>
            </div>

            <div className='contents'>
                <input
                    type="radio"
                    id="contents"
                    name="ex_rds"
                    onClick={() => changeCon("contents")}/>
                <label for="contents">상담게시판</label>
            </div>

            <br/>
            
            <div>
                {
                    category.map((item, i) => {
                        return (
                            <div class="categories">
                                <input
                                    type="radio"
                                    id={item + i}
                                    name="cc"
                                    onClick={() => Categorys(item)}/>
                                <label for={ item + i}>{item}</label>
                            </div>
                        )
                    })
                }

            </div>
            <br/> {
                change === "vote"
                    ? (

                        <div>
                            <div className='title'>
                                <label for="title">제목</label>
                                <input type="text" id="title" name="vote" onChange={titleVote}/>
                            </div>
                            <div className='voteOption1'>
                                <label for=" voteOption1">선택1</label>
                                <input type="text" id=" voteOption1" name="vote" onChange={optionVote1}/>
                            </div>
                            <div className=' voteOption2'>
                                <label for=" voteOption2">선택2</label>
                                <input type="text" id=" voteOption2" name="vote" onChange={optionVote2}/>
                            </div>
                        </div>
                    )
                    : (

                        <div>
                            <label for="title">제목</label>
                            <input type="text" id="title" name="contents" onChange={titleContents}/>
                            <form >
                                <label htmlFor="input-file" onChange={handleAddImages}>
                                    <input type="file" id="input-file" multiple="multiple"/>
                                </label>
                            </form>

                            {
                                showImages.length > 0
                                    ? showImages.map((image, id) => (
                                        <div key={id}>
                                            <Image src={image} alt={`${image}-${id}`}/>
                                            <DeleteBtn onClick={() => handleDeleteImage(id)}>x</DeleteBtn>
                                        </div>
                                    ))
                                    : <Image src="http://via.placeholder.com/400x300"/>
                            }
                            <Input type="textarea" onChange={Contents}/>
                        </div>

                    )
            }

            <button onClick={saveBtn} >저장하기</button>
        </React.Fragment>
    )
}

const Image = styled.img `
width : 450px;
height : 450px;
`;

const DeleteBtn = styled.button `
position: relative;
top : -430px;
right : 30px;
background :none;
border : none;
font-size : 20px;
cursor: pointer;
`;

const Input = styled.textarea `
width : 500px;
height : 100px;
resize: none;
`;
export default Write