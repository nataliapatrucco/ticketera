import {
  FETCH_OPEN,
  FETCH_PROCESSING,
  FETCH_MY_TICKETS,
  FETCH_TICKET,
  DELETE_TICKET
} from "../constants";
const initialState = {
  open: [],
  processing: [],
  userTickets: [],
  single: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_OPEN:
      return { ...state, open: action.open };
    case FETCH_PROCESSING:
      return { ...state, processing: action.processing };
    case FETCH_MY_TICKETS:
      return { ...state, userTickets: action.userTickets };
    case FETCH_TICKET:
      return { ...state, single: action.single };
    default:
      return state;
  }
};
