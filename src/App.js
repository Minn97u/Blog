/* eslint-disable */

import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "./App.css";
import data from "./data.js";

function App() {
  let [post] = useState(data);

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
            <h5>{post[0].title}</h5>
            <p>{post[0].content}</p>
          </div>
          <div className="col-md-4">
            <img src="/jsLogo.png" width="70%"></img>
            <h5>{post[1].title}</h5>
            <p>{post[1].content}</p>
          </div>
          <div className="col-md-4">
            <img src="/jsLogo.png" width="70%"></img>
            <h5>{post[2].title}</h5>
            <p>{post[2].content}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
