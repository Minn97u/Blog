/* eslint-disable */

import { useState } from "react";
import "./App.css";

function App() {
  // let post = "강남 고기 맛집";
  const [title, setTitle] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬독학",
  ]);
  const [like, setLike] = useState([0, 0, 0]);
  const [modal, setModal] = useState(false);
  const [titleindex, setTitleIndex] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const openModal = (i) => {
    setTitleIndex(i);
    if (modal === false) {
      setModal(true);
    } else {
      setModal(false);
    }
  };

  const changeTitle = () => {
    const newTitle = [...title];
    newTitle[0] = "여자 코트 추천";
    setTitle(newTitle);
  };

  const changeLike = (i) => {
    const newLike = [...like];
    newLike[i] += 1;
    setLike(newLike);
  };

  const addPost = () => {
    if (inputValue.trim() === "") {
      alert("글 제목을 입력해주세요");
      return;
    }
    const newTitle = [...title, inputValue];
    setTitle(newTitle);

    const newLike = [...like, 0];
    setLike(newLike);

    setInputValue("");
  };

  const deletePost = (i) => {
    const newTitle = title.filter((_, index) => index !== i);
    setTitle(newTitle);
    const newLike = like.filter((_, index) => index !== i);
    setLike(newLike);
  };

  return (
    <div className="App">
      <div className="black-nav">
        <h1 style={{ color: "white", fontSize: "30px" }}>
          Welcome to Mingyu's blog
        </h1>
      </div>

      {title.map((a, i) => {
        return (
          <div className="list" key={i}>
            <div>
              <h3 onClick={() => openModal(i)}>
                {i + 1}. {a}
              </h3>
            </div>
            <p>2월 17일 발행</p>
            <div style={{ marginBottom: "10px" }}>
              <span onClick={() => changeLike(i)}>👍🏻</span> {like[i]}
              <button
                style={{ marginLeft: "10px" }}
                onClick={() => {
                  deletePost(i);
                }}
              >
                삭제
              </button>
            </div>
          </div>
        );
      })}

      <input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <button onClick={() => addPost()}>in 글 발행</button>
      {modal === true ? (
        <Modal title={title[titleindex]} changeTitle={changeTitle} />
      ) : null}
    </div>
  );
}

function Modal(props) {
  return (
    <>
      <div className="modal">
        <h2>{props.title}</h2>
        <p>날짜</p>
        <p>상세 내용</p>
        <button onClick={() => props.changeTitle()}>글 수정</button>
      </div>
    </>
  );
}

export default App;
