import React from "react";
import ContentNav from "./ContentNav";
import Home from "./Home";
import "./Content.css";

export default function Content() {
  return (
    <div id="content">
      <ContentNav />
      <Home />
    </div>
  );
}
