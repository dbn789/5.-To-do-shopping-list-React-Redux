import { newRow } from "./functions";

let defaultState = [];
if (localStorage.length) {
  if (localStorage.getItem("shopsArray"))
    defaultState = JSON.parse(localStorage.getItem("shopsArray"));
}

export function shopsReducer(state = defaultState, action) {
  switch (action.type) {
    case "ADD_SHOP": {
      const row = newRow(action.payload.text);
      return [...state, row];
    }
    case "DELETE_ROW": {
      return state.filter((item) => item.id !== action.payload.id);
    }
    case "CHANGE": {
      return state.map((item) => {
        item.id === action.payload.id
          ? (item.isChecked = !item.isChecked)
          : console.log("!");
        return item;
      });
    }
    case "RESET": {
      return [];
    }
    default:
      return state;
  }
}
