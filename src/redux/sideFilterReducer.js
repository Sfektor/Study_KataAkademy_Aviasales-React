import { GET_SIDE_FILTER } from "./types";

const initState = {
  filter: [
    { name: "all", label: "Все", checked: true },
    { name: "noTransfers", label: "Без пересадок", checked: true },
    { name: "oneTransfers", label: "1 пересадка", checked: true },
    { name: "twoTransfers", label: "2 пересадки", checked: true },
    { name: "threeTransfers", label: "3 пересадки", checked: true },
  ],
};

export const sideFilterReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_SIDE_FILTER: {
      const name = action.name;
      const checkAll = state.filter.every((el) => el.checked);
      let newState = state.filter.map((el) => {
        el.checked = name === "all" ? false : el.checked;
        el.checked = !checkAll && name === "all" ? true : el.checked;
        el.checked =
          el.name === name && el.name !== "all" ? !el.checked : el.checked;
        el.checked =
          checkAll && el.name === "all" && name !== "all" ? false : el.checked;
        return el;
      });
      const checkNoAll = state.filter.slice(1).every((el) => el.checked);
      if (checkNoAll) {
        newState = state.filter.map((el) => {
          el.checked = el.name === "all" ? true : el.checked;
          return el;
        });
      }
      return { ...state, filter: newState };
    }

    default:
      return state;
  }
};
