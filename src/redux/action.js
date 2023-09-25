import { GET_TIKET_FILTER, GET_SIDE_FILTER, TIKETS_LOAD } from "./types";

export const getTiketFilter = (name) => {
  return {
    type: GET_TIKET_FILTER,
    name,
  };
};

export const getSideFilter = (name, status) => {
  return {
    type: GET_SIDE_FILTER,
    name,
    status,
  };
};

export const tiketsLoad = () => {
  return async (dispatch) => {
    const searchId = await fetch(
      "https://aviasales-test-api.kata.academy/search"
    );
    const jsonSearchId = await searchId.json();
    const response = await fetch(
      `https://aviasales-test-api.kata.academy/tickets?searchId=${jsonSearchId.searchId}`
    );
    const jsonData = await response.json();
    dispatch({
      type: TIKETS_LOAD,
      data: { jsonData },
    });
  };
};
