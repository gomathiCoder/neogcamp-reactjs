import React from "react";
import "./styles.css";
import { useState } from "react";

export default function Ex08() {
  const [likeCounter, setLikeCounter] = useState(0);

  function clickHandler() {
    setLikeCounter(likeCounter + 1);
  }

  return (
    <div className="Ex08">
      <button onClick={clickHandler}>Like</button> {likeCounter}
    </div>
  );
}
