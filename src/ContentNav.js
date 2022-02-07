import React from "react";
import "./ContentNav.css";
import Menu from "./images/menu.png";
import Search from "./images/search.png";
import Ques from "./images/question.png";

export default function ContentNav() {
  return (
    <div id="sidebar">
      <div id="sidebar1">
        <img src={Menu} alt="menu" />
        <img src={Search} alt="search" />
      </div>

      <div id="sidebar2">
        <img src={Ques} alt="question" />
      </div>
    </div>
  );
}
