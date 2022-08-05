import React from "react";
import "./style.css";

const CardGame = ({ name, onClick }) => {
  return (
    <button className="card" onClick={onClick}>
      {name}
    </button>
  );
};

export default CardGame;
