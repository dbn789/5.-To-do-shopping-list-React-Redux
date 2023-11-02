import React from "react";
import { useSelector } from "react-redux";
import ShopsDoNot from "./components/ShopsDoNot";
import ShopsDo from "./components/ShopsDo";

const Buy = () => {
  const state = useSelector((store) => store);
  const shops = state.shops;
  const shopsDo = [];
  const shopsDoNot = [];

  shops.forEach((item) => {
    item.isChecked ? shopsDo.push(item) : shopsDoNot.push(item);
  });

  return (
    <div>
      {shops.length ? (
        <div className="inline">
          <ShopsDoNot shopsDoNot={shopsDoNot} />
          <ShopsDo shopsDo={shopsDo} />
        </div>
      ) : (
        <h1 style={{ textAlign: "center", marginTop: 100 }}>
          Покупок пока нет!
        </h1>
      )}
    </div>
  );
};

export default Buy;
