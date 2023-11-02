import React, { useRef, useState } from "react";
import MyInput from "./components/UI/MyInput";
import MyButton from "./components/UI/MyButton";
import Deals from "./components/Deals";
import Shops from "./components/Shops";
import { useDispatch, useSelector } from "react-redux";

const Edit = () => {
  const dispatch = useDispatch();
  const state = useSelector((store) => store);
  const deals = state.deals;
  const shops = state.shops;

  const inputDealRef = useRef();
  const inputShopRef = useRef();

  const addDeal = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_DEAL",
      payload: { text: inputDealRef.current.value },
    });
    inputDealRef.current.value = "";
  };

  const addShop = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_SHOP",
      payload: { text: inputShopRef.current.value },
    });
    inputShopRef.current.value = "";
  };

  const deleteItem = (id) => {
    dispatch({
      type: "DELETE_ROW",
      payload: { id: id },
    });
  };

  const checkedItem = (id) => {
    dispatch({
      type: "CHANGE",
      payload: { id: id },
    });
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: 30 }}>Редактор</h1>
      <form className="todoEdit">
        <div>
          <MyInput
            ref={inputDealRef}
            type="text"
            placeholder="Добавить дела"
          ></MyInput>
          <MyButton onClick={(e) => addDeal(e)}>Добавить</MyButton>
        </div>
        <div>
          <MyInput
            type="text"
            ref={inputShopRef}
            placeholder="Добавить покупки"
          ></MyInput>
          <MyButton onClick={(e) => addShop(e)}>Добавить</MyButton>
        </div>
      </form>
      <div className="inline">
        <Deals deals={deals} delete={deleteItem} checked={checkedItem} />
        <Shops shops={shops} delete={deleteItem} checked={checkedItem} />
      </div>
    </div>
  );
};

export default Edit;
