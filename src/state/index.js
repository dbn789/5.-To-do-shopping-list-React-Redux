import { createStore, combineReducers } from "redux";
import { dealsReducer } from "./dealsReducer";
import { shopsReducer } from "./shopsReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  deals: dealsReducer,
  shops: shopsReducer,
});
export const store = createStore(rootReducer, composeWithDevTools());

store.subscribe(() => {
  localStorage.clear();
  localStorage.setItem("dealsArray", JSON.stringify(store.getState().deals));
  localStorage.setItem("shopsArray", JSON.stringify(store.getState().shops));
});
