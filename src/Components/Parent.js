import React from "react";
import Fish from "./Fish";

const Parent = () => {
  const fishData = [
    {
      type: "Goldfish",
      description:
        "Most goldfish are peaceful and schooling fish that mix well with other goldfish. They come in a variety of striking colors with fascinating features like telescoping eyes and a veiltail.",
      buttontext: "Read more here",
    },
    {
      type: "Koi Fish",
      description:
        "Originally bred in Japan, koi have become cherished around the world for their vibrant and diverse colors, distinctive patterns, and graceful swimming behavior. ",
      buttontext: "Check this out",
    },
    {
      type: "Betta Fish",
      description:
        "With their long flowing tails and vibrant colors, it's no wonder that bettas are one of the most popular fish for beginner aquarists. They are easy to care for and make a great ornamental addition to any desk, kid's room or living space. ",
      buttontext: "Wow look at this",
    },
  ];

  return (
    <div className="parent">
      {fishData.map((fish, index) => (
        <Fish
          key={index}
          type={fish.type}
          description={fish.description}
          buttontext={fish.buttontext}
        />
      ))}
    </div>
  );
};

export default Parent;
