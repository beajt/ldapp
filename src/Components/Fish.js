import React from "react";
import { useState } from "react";

const Fish = ({ type, description, buttontext }) => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="fish">
      <h1>{type}</h1>
      <p>{description}</p>
      <button onClick={handleClick}>{buttontext}</button>
      <p>You have clicked the button {counter} times</p>
    </div>
  );
};

export default Fish;
