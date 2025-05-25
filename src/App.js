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
  const [like, setLike] = useState(0);
  const [modal, setModal] = useState(false);

  const changeTitle = () => {
    const newTitle = [...title];
    newTitle[0] = "여자 코트 추천";
    setTitle(newTitle);
  };

  return (
    <div className="App">
      <div className="black-nav">
        <h1 style={{ color: "white", fontSize: "30px" }}>
          Welcome to Mingyu's blog
        </h1>
      </div>
      <div className="list">
        <h3>
          1. {title[0]} <span onClick={changeTitle}>👩‍🦰</span>{" "}
        </h3>
        <p>2월 17일 발행</p>
        <div style={{ marginBottom: "10px" }}>
          <span onClick={() => setLike(like + 1)}>👍🏻</span> {like}
        </div>
      </div>
      <div className="list">
        <h3>2. {title[1]}</h3>
        <p>2월 18일 발행</p>
      </div>
      <div className="list">
        <h3
          onClick={() => {
            if (modal === false) {
              setModal(true);
            } else {
              setModal(false);
            }
          }}
        >
          3. {title[2]}
        </h3>
        <p>2월 19일 발행</p>
      </div>
      {modal === true ? <Modal /> : null}
    </div>
  );
}

function Modal() {
  return (
    <>
      <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세 내용</p>
      </div>
    </>
  );
}

export default App;
