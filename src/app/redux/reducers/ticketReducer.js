import { FETCH_OPEN, FETCH_PROCESSING, FETCH_MY_TICKETS } from "../constants";
const initialState = { open: [], processing: [], myTickets: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_OPEN:
      return { ...state, open: action.open };
    case FETCH_PROCESSING:
      return { ...state, processing: action.processing };
    case FETCH_MY_TICKETS:
      return { ...state, myTickets: action.myTickets };
    default:
      return state;
  }
};
