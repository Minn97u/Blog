/* eslint-disable */

import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./App.css";
import {data} from "./data";

function App() {
  let [post] = useState();
  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Mingyu's Blog</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#aboutMe">About Me</Nav.Link>
            <Nav.Link href="#gallery">Gallery / Life</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="main-bg"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img src="/jsLogo.png" width="70%"></img>
            <h5>자바 스크립트 기초 문법</h5>
            <p>내용</p>
            <p>{a}</p>
          </div>
          <div className="col-md-4">
            <img src="/jsLogo.png" width="70%"></img>
            <h5>자바 스크립트 응용</h5>
            <p>내용</p>
          </div>
          <div className="col-md-4">
            <img src="/jsLogo.png" width="70%"></img>
            <h5>var,let,const에 대해 알아보자</h5>
            <p>내용</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
