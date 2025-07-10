import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/Auth/LoginPage.jsx";
import SignIn from "./Components/Auth/SignIn.jsx";
import ChatPage from "./Components/Pages/ChatPage.jsx";
import Home from "./Components/Pages/Home.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/Chat" element={<ChatPage />} />
        <Route path="/register" element={<SignIn />} /> 
      </Routes>
    </Router>
  </StrictMode>
);
