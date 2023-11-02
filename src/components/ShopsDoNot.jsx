import React from "react";

const ShopsDoNot = ({ shopsDoNot }) => {
  return (
    <div className="deals">
      <h2 style={{ marginBottom: 30 }}>Покупки, которые надо сделать!</h2>
      {shopsDoNot.map((row, index) => (
        <div key={row.id}>
          {index + 1}. {row.text}
        </div>
      ))}
    </div>
  );
};

export default ShopsDoNot;
