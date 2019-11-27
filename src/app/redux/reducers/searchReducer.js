import { SEARCH } from "../constants";

const initialState = { search: {} };

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH:
      return { search: action.search };
    default:
      return state;
  }
};
