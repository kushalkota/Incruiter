import React from "react";
import "./Button.css";

export default function Button(props) {
  return (
    <div>
      <button id="btn-1">{props.button}</button>
    </div>
  );
}
