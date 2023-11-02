import React from "react";

const DealsDo = ({ dealsDo }) => {
  return (
    <div className="deals">
      <h2 style={{ marginBottom: 30 }}>Уже сделанные дела</h2>
      {dealsDo.map((row, index) => (
        <div key={row.id}>
          {index + 1}. {row.text}
        </div>
      ))}
    </div>
  );
};

export default DealsDo;
