import { Link } from "react-router-dom";
import { useState } from "react";

interface PostListProps {
    hasNavigation?: boolean;//타입스크립트 기능
}

type TabType = "all" | "my";

export default function PostList({ hasNavigation = true }: PostListProps) {
    const [activeTab, setActiveTab] = useState<TabType>("all");

    return (
        <>
            {hasNavigation && (
                <div className="post__navigation">
                <div
                    role="presentation"
                    onClick={() => setActiveTab("all")}
                    className={activeTab === "all" ? "post__navigation--active" : ""}
                >
                    전체
                </div>
                <div
                    role="presentation"
                    onClick={() => setActiveTab("my")}
                    className={activeTab === "my" ? "post__navigation--active" : ""}
                >
                    나의 글
                </div>
                </div>
            )}

            <div className="post__list">
                {[...Array(10)].map((e, index) => (
                    <div key={index} className="post__box">
                        <Link to={`/posts/${index}`}>
                        <div className="post__profile-box">
                            <div className="post__profile"/>
                            <div className="post__author-name">패스트캠퍼스</div>
                            <div className="post__date">2025.02.18 화요일</div>
                        </div>
                        <div className="post__title">
                            게시글 {index}
                        </div>
                        <div className="post__text">
                        테스트내용입니다. 오늘날씨는 추워요.테스트내용입니다. 오늘날씨는 추워요.테스트내용입니다. 오늘날씨는 추워요.테스트내용입니다. 오늘날씨는 추워요.테스트내용입니다. 오늘날씨는 추워요.
                        </div>
                        <div className="post__utils-box">
                            <div className="post__delete">삭제</div>
                            <div className="post__edit">수정</div>
                        </div>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    );
}