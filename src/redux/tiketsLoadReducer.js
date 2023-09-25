import { TIKETS_LOAD } from "./types";

const initionalState = {};

export const tiketsLoadReducer = (state = initionalState, action) => {
  switch (action.type) {
    case TIKETS_LOAD:
      const data = action.data?.jsonData.tickets;
      return {
        ...state,
        state: data,
      };

    default:
      return state;
  }
};
