import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./layout/Navbar/Navbar";
import HomeScreen from "./layout/HomeScreen";
import AboutScreen from "./screen/AboutScreen";
import BlogsScreen from "./screen/BlogsScreen";
import ProjectScreen from "./screen/ProjectScreen";
import ResumeScreen from "./screen/ResumeScreen";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="relative">
          <div className="sticky top-0 opacity-100 bg-white">
            <Navbar />
          </div>
          <Routes>
            <Route path="/" Component={HomeScreen} />
            <Route path="/about" Component={AboutScreen} />
            <Route path="/blogs" Component={BlogsScreen} />
            <Route path="/projects" Component={ProjectScreen} />
            <Route path="/resume" Component={ResumeScreen} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
