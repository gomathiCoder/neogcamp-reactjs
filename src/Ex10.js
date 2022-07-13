import "./styles.css";
import { useState } from "react";

export default function Ex10() {
  const [emoji, setEmoji] = useState("");
  function changeHandler(event) {
    setEmoji(event.target.value);
  }

  return (
    <div className="Ex10">
      <h1>inside out</h1>
      <input onChange={(event) => changeHandler(event)} />
      <br />
      <br />
      {emoji}
    </div>
  );
}
