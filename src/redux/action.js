import { GET_TIKET_FILTER } from "./types";
import { GET_SIDE_FILTER } from "./types";

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
