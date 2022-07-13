import { useState } from "react";
import "./styles.css";

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

const emojiList = Object.keys(emojiDictionary);

export default function Emojipreter() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    let inputEmoji = event.target.value;
    if (!inputEmoji) {
      return setMeaning("");
    }
    if (inputEmoji in emojiDictionary) {
      return setMeaning(emojiDictionary[inputEmoji]);
    }
    return setMeaning(`${inputEmoji} is not present in our Database.`);
  }

  function emojiClickHandler(emoji) {
    setMeaning(emojiDictionary[emoji]);
  }

  return (
    <div className="Emojipreter">
      <h1>Emojipreter</h1>
      <input onChange={(event) => emojiInputHandler(event)} />
      <br />
      <br />
      <h2>{meaning}</h2>
      <h5>Emojis we know</h5>
      {emojiList.map((emoji) => (
        <span
          key={emoji}
          style={{
            fontSize: "xx-large",
            padding: "1rem",
            lineHeight: "3.5rem",
            cursor: "pointer"
          }}
          onClick={() => emojiClickHandler(emoji)}
        >
          {emoji}
        </span>
      ))}
    </div>
  );
}
