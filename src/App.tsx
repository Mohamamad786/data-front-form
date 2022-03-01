import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./components/login.component";
import SignUp from "./components/signup.component";

function App() {
  return (<Router>
    <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/sign-up" element={<SignUp />}></Route>
          </Routes>
        </div>
      </div>
    </div></Router>
  );
}

export default App;
