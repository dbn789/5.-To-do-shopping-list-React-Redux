import React from "react";

const Shops = (props) => {
  return (
    <div>
      {props.shops.map((s, index) => (
        <div key={s.id} className="row">
          <input
            type="checkbox"
            checked={s.isChecked}
            id={s.id}
            value={s.isChecked}
            onChange={() => props.checked(s.id)}
          ></input>
          {index + 1}. {s.text}
          <button className="rowBtn" onClick={() => props.delete(s.id)}>
            Удалить
          </button>
        </div>
      ))}
    </div>
  );
};

export default Shops;
