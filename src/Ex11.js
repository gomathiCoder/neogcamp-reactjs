import "./styles.css";
import { useState } from "react";

const emojiDictionary = {
  "😊": "Smiling Face",
  "😉": "Winking Face",
  "🍎": "Red Apple",
  "🐶": "Dog Face",
  "🐕": "Dog",
  "🦮": "Guide Dog",
  "🐕‍🦺": "Service Dog",
  "🐩": "Poodle"
};

export default function Ex11() {
  const [meaning, setMeaning] = useState("");

  function changeHandle(event) {
    let inputEmoji = event.target.value;
    if (!inputEmoji) {
      return setMeaning("");
    }
    if (inputEmoji in emojiDictionary) {
      return setMeaning(emojiDictionary[inputEmoji]);
    }
    return setMeaning("We don't have this emoji in our database");
  }

  return (
    <div className="Ex11">
      <h1>Emojipreter</h1>
      <input onChange={(event) => changeHandle(event)} />
      <br />
      <br />
      {meaning}
    </div>
  );
}
