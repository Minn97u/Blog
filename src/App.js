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

  const openModal = () => {
    if (modal === false) {
      setModal(true);
    } else {
      setModal(false);
    }
  };

  const changeLike = (i) => {
    const newLike = [...like];
    newLike[i] += 1;
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
            <h3 onClick={openModal}>
              {i + 1}. {a}
            </h3>
            <p>2월 17일 발행</p>
            <div style={{ marginBottom: "10px" }}>
              <span onClick={() => changeLike(i)}>👍🏻</span> {like[i]}
            </div>
          </div>
        );
      })}
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
