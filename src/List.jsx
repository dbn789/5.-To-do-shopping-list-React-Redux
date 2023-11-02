import React from "react";
import { useSelector } from "react-redux";
import DealsDo from "./components/DealsDo";
import DealsDoNot from "./components/DealsDoNot";

const List = () => {
  const state = useSelector((store) => store);
  const deals = state.deals;
  const dealsDo = [];
  const dealsDoNot = [];

  deals.forEach((item) => {
    item.isChecked ? dealsDo.push(item) : dealsDoNot.push(item);
  });

  return (
    <div>
      {deals.length ? (
        <div className="inline">
          <DealsDoNot dealsDoNot={dealsDoNot} />
          <DealsDo dealsDo={dealsDo} />
        </div>
      ) : (
        <h1 style={{ textAlign: "center", marginTop: 100 }}>Дел пока нет!</h1>
      )}
    </div>
  );
};

export default List;
