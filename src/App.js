import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "๐คบ": "Fencing",
  "โท๏ธ": "Skiing",
  "๐๏ธโโ๏ธ": "Golf",
  "๐ฃ": "Boat Rowing",
  "๐": "surfing",
  "๐": "snow boarder",
  "๐": "swimming",
  "โน๏ธ": "basketball",
  "๐๏ธ": "weight-lifling",
  "๐ด": "cycling",
  "๐ต": "Mountain-Biking",
  "๐คธ": "Cartwheel",
  "๐คผ": "wrestleing",
  "๐คฝ": "water polo",
  "๐คพ": "handball",
  "๐คน": "jugling",
  "๐ง": "youga",
  "๐ง": "wall climbing",
  "๐": "horse riding",
  "โฝ": "football",
  "๐ฅ": "boxing",
  "๐": "table tennis",
  "๐ฅ": "martial arts",
  "๐ฑ": "pool",
  "๐ฎ": "Video game",
  "โ๏ธ": "Chess",
  "๐": "Cricket",
  "๐": "volleyball",
  "๐": "Smiling",
  "๐": "Laughing with tears of joy",
  "๐ฅฐ": "smiling face with hearts",
  "๐ค": "money-mouth face",
  "๐": "annoyance",
  "๐ณ": "Disbelief",
  "๐": "sad",
  "โค๏ธ": "love",
  "๐ฅก": "Take-out food box",
  "๐": "In love of",
  "๐": "doing good deeds",
  "๐": "conveys feelings of love and affection",
  "๐": " fun, excitement, wackiness, or joking.",
  "๐": "neutral",
  "๐": "displeasure, grumpiness, or skepticism"
  // "": "",
  // "": "",
  // "": "",
};

const emojis = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function userInputHandler() {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Sorry this one is not in database.";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(item) {
    var meaning = emojiDictionary[item];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 className="header">Sport-emoji</h1>
      <p className="para">Enter below an emoji to know its Meaning</p>

      <input
        onChange={function () {
          return userInputHandler(event);
        }}
      ></input>

      <div className="meaning"> "{meaning}" </div>
      <h2 className="dataHeader">Emojis our database supports.</h2>

      <div className="divDisplayEmoji">
        {emojis.map(function (item) {
          return (
            <span
              key={item}
              onClick={function () {
                return emojiClickHandler(item);
              }}
              className="displayEmojis"
            >
              {" "}
              {item}{" "}
            </span>
          );
        })}
      </div>
    </div>
  );
}
