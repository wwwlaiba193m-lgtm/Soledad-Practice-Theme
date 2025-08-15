import React from "react";

export default function Cards() {
  const cardData = [
    {
      title: "Card 1",
      description:
        "This is the description for card 1  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iste dicta sit. Magni asperiores consectetur, cupiditate ab modi vero commodi doloremque obcaecati eum soluta. Atque dignissimos architecto ratione voluptatum esse..",
    },
    {
      title: "Card 2",
      description:
        "This is the description for card 2  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iste dicta sit. Magni asperiores consectetur, cupiditate ab modi vero commodi doloremque obcaecati eum soluta. Atque dignissimos architecto ratione voluptatum esse..",
    },
    {
      title: "Card 3",
      description:
        "This is the description for card 3  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iste dicta sit. Magni asperiores consectetur, cupiditate ab modi vero commodi doloremque obcaecati eum soluta. Atque dignissimos architecto ratione voluptatum esse..",
    },
    {
      title: "Card 4",
      description:
        "This is the description for card 4  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iste dicta sit. Magni asperiores consectetur, cupiditate ab modi vero commodi doloremque obcaecati eum soluta. Atque dignissimos architecto ratione voluptatum esse..",
    },
    {
      title: "Card 5",
      description:
        "This is the description for card 5  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi iste dicta sit. Magni asperiores consectetur, cupiditate ab modi vero commodi doloremque obcaecati eum soluta. Atque dignissimos architecto ratione voluptatum esse..",
    },
  ];

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {cardData.map((card, index) => (
        <div
          key={index}
          style={{
            width: "30%",
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "16px",
            boxSizing: "border-box",
          }}
        >
          <h3>{card.title}</h3>
          <p>{card.description}</p>
          <hr />
          <button style={{ marginTop: "10px" }}>Profile</button>
        </div>
      ))}
    </div>
  );
}
