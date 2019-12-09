import { SEARCH_TICKETS, FETCH_CLOSED } from "../constants";

const initialState = { searched: [], closed: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_TICKETS:
      return { ...state, searched: action.searchedTickets };
    case FETCH_CLOSED:
      return { ...state, closed: action.tickets };
    default:
      return state;
  }
};
