import { combineReducers } from "redux";
import { ticketFilterReducer } from "./tiketFilterReducer";
import { sideFilterReducer } from "./sideFilterReducer";
import { tiketsLoadReducer } from "./tiketsLoadReducer";

export const rootReducer = combineReducers({
  ticketFilterReducer,
  sideFilterReducer,
  tiketsLoadReducer,
});
