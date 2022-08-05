import { useState } from "react";
import "./App.css";
import CardGame from "./components/cardGame";
import React from "react";

function App() {
  const cards = ["gunting", "batu", "kertas"];
  const [player, setPlayer] = useState();
  const [computer, setComputer] = useState();
  const [result, setResult] = useState("mulai");
  const [pvalue, setPValue] = useState(0);
  const [cvalue, setCValue] = useState(0);

  const handleCard = (name) => {
    setPlayer(name);
    const i = Math.floor(Math.random() * 3);
    setComputer(cards[i]);

    if (player === "batu" && computer === "gunting") {
      setResult("you win");
      setPValue((prevValue) => prevValue + 1);
    } else if (player === "batu" && computer === "kertas") {
      setResult("computer win");
      setCValue((prevValue) => prevValue + 1);
    } else if (player === "gunting" && computer === "kertas") {
      setResult("you win");
      setPValue((prevValue) => prevValue + 1);
    } else if (player === "gunting" && computer === "batu") {
      setResult("computer win");
      setCValue((prevValue) => prevValue + 1);
    } else if (player === "kertas" && computer === "batu") {
      setResult("you win");
      setPValue((prevValue) => prevValue + 1);
    } else if (player === "kertas" && computer === "gunting") {
      setResult("computer win");
      setCValue((prevValue) => prevValue + 1);
    } else {
      setResult("draw");
    }

    if (pvalue === 5) {
      alert("player win");
      setPValue(0);
      setCValue(0);
      setPlayer("");
      setComputer("");
    } else if (cvalue === 5) {
      alert("computer win");
      setPValue(0);
      setCValue(0);
      setPlayer("");
      setComputer("");
    }
  };

  return (
    <div style={{ margin: "auto", width: "450px" }}>
      <h1>Game Batu, Gunting, Kertas</h1>
      <div style={{ marginBottom: "20px" }}>
        <h4>{result}</h4>
        <div>
          Player {pvalue} - {cvalue} Computer
        </div>
      </div>
      <div
        style={{
          width: "450px",
          height: "450px",
          border: "1px solid black",
          marginBottom: "50px",
          alignSelf: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h5>Computer</h5>
        {computer && <CardGame name={computer} />}

        <h5>VS</h5>

        <h5>Player</h5>
        {player && <CardGame name={player} />}
      </div>
      {cards.map((item, index) => (
        <CardGame key={index} name={item} onClick={() => handleCard(item)} />
      ))}
    </div>
  );
}

export default App;
