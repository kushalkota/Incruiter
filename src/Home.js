import React from "react";
import "./Home.css";
import Homebtn from "./Homebtn";
import Search from "./images/search (1).png";

export default function Home() {
  return (
    <div id="home">
      <div id="home1">
        <div id="home1-con">
          <p>Add subscriber</p>
          <div id="searchbar">
            <p>your are looking for</p>
            <img src={Search} alt="search" />
          </div>
        </div>
      </div>
      <div id="home2">
        <h4>Name</h4>
        <input type="text" placeholder="Enter Name" />
        <h4>Email</h4>
        <input type="email" placeholder="Enter Email" />
        <Homebtn button="Invite User" />
      </div>
    </div>
  );
}
