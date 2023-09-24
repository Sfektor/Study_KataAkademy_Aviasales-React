import { GET_TIKET_FILTER } from "./types";

const initionalState = {
  stateFilter: "theFastest",
};

export const ticketFilterReducer = (state = initionalState, action) => {
  switch (action.type) {
    case GET_TIKET_FILTER:
      return {
        ...state,
        stateFilter: action.name,
      };

    default:
      return state;
  }
};
