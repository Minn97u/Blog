import { useState } from "react";
import "./App.css";

function App() {
  // let post = "강남 고기 맛집";
  const [a, b] = useState("남자 코트 추천");
  const [logo, setLoge] = useState("Welcome to Mingyu's blog");

  return (
    <div className="App">
      <div className="black-nav">
        <h1 style={{ color: "white", fontSize: "30px" }}>{logo}</h1>
      </div>
      <div className="list">
        <h3>1. 글제목</h3>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h3>2. {a}</h3>
        <p>2월 18일 발행</p>
      </div>
      <div className="list">
        <h3>3. 글제목</h3>
        <p>2월 19일 발행</p>
      </div>
    </div>
  );
}

export default App;
