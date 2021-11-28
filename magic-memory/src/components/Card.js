import React from "react";
import "./Card.css";

const Card = ({ card, handleChoice, flipped }) => {
  const handleClick = () => {
    handleChoice(card);
  };
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img src={card.src} className="front" alt="card-front" />
        <img
          src="/img/cover.png"
          onClick={handleClick}
          className="back"
          alt="card-back"
        />
      </div>
    </div>
  );
};

export default Card;
