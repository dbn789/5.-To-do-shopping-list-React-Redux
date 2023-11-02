import React from "react";

const DealsDoNot = ({ dealsDoNot }) => {
  return (
    <div className="deals">
      <h2 style={{ marginBottom: 30 }}>Дела, которые надо сделать!</h2>
      {dealsDoNot.map((row, index) => (
        <div key={row.id}>
          {index + 1}. {row.text}
        </div>
      ))}
    </div>
  );
};

export default DealsDoNot;
