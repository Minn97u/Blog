/* eslint-disable */

import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import PostList from "./components/postList.js";
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
    

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <div className="post-container">
                <div className="row">
                  <PostList posts={post} />
                </div>
              </div>
            </>
          }
        />
        <Route path="/projects" element={<PostList posts={post} />} />
        <Route path="/aboutme" element={<PostList posts={post} />} />
        <Route path="/gallery" element={<PostList posts={post} />} />
      </Routes>
    </div>
  );
}
export default App;
