import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";

import "../styles/Home.css";

const home = () => {
  return (
    <>
      <Navbar />
      <div className="home">
        <Sidebar />
        <Content />
      </div>
    </>
  );
};

export default home;
