import React from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import HomePage from "./Homepage";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Layout>
          <Link className="logo" to="/">
            Budget Buddy
          </Link>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
