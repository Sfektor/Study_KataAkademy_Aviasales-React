import { combineReducers } from "redux";
import { ticketFilterReducer } from "./tiketFilterReducer";
import { sideFilterReducer } from "./sideFilterReducer";

export const rootReducer = combineReducers({
  ticketFilterReducer,
  sideFilterReducer,
});
