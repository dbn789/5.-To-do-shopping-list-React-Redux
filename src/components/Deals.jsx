import React from "react";

const Deals = (props) => {
  return (
    <div>
      {props.deals.map((d, index) => (
        <div key={d.id} className="row">
          <input
            type="checkbox"
            value={d.isChecked}
            id={d.id}
            checked={d.isChecked}
            onChange={() => props.checked(d.id)}
          ></input>
          {index + 1}. {d.text}
          <button className="rowBtn" onClick={() => props.delete(d.id)}>
            Удалить
          </button>
        </div>
      ))}
    </div>
  );
};

export default Deals;
