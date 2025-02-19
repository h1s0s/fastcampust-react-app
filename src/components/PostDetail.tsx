import { Link } from "react-router-dom";

export default function PostDetail(){
    return <>
        <div className="post__detail">
            <div className="post__box">
                <div className="post__title">
                    게시물 타이틀
                </div>
                <div className="post__profile-box">
                    <div className="post__profile"/>
                    <div className="post__author-name">패스트캠퍼스</div>
                    <div className="post__date">2025.02.18 화요일</div>
                </div>
                <div className="post__utils-box">
                    <div className="post__delete">삭제</div>
                    <div className="post__edit">
                        <Link to={`/posts/edit/1`}>수정</Link></div>
                </div>
                <div className="post__text">
                테스트내용입니다. 오늘날씨는 추워요.테스트내용입니다. 오늘날씨는 추워요.테스트내용입니다. 오늘날씨는 추워요.테스트내용입니다. 오늘날씨는 추워요.테스트내용입니다. 오늘날씨는 추워요.
                </div>
            </div>
        </div>
    </>
}