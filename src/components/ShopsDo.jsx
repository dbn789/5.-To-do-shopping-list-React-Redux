import React from "react";

const ShopsDo = ({ shopsDo }) => {
  return (
    <div className="deals">
      <h2 style={{ marginBottom: 30 }}>Уже сделанные покупки</h2>
      {shopsDo.map((row, index) => (
        <div key={row.id}>
          {index + 1}. {row.text}
        </div>
      ))}
    </div>
  );
};

export default ShopsDo;
