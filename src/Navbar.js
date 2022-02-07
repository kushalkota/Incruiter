import React from "react";
import "./Navbar.css";
import Logo from "./images/logo.png";
import Bell from "./images/bell.png";
import User from "./images/user.png";
import Button from "./Button";
import Button2 from "./Button2";

export default function Navbar() {
  return (
    <div id="navbar">
      <div class="nav-content1">
        <img src={Logo} alt="logo" />
        <Button button="Create Position" />
        <Button button="Post Interview" />
      </div>

      <div class="nav-content2">
        <Button2 button="Dashboard" />
        <Button2 button="My Interviews" />
        <Button2 button="My Position" />
        <img src={Bell} alt="notification" />
        <img src={User} alt="profile" />
        <h3>User Name</h3>
      </div>
    </div>
  );
}
