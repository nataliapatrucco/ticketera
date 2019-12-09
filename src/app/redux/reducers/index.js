import { combineReducers } from "redux";
import userReducer from "./userReducer";
import searchReducer from "./searchReducer";
import ticketsReducer from "./ticketReducer";

export default combineReducers({
  user: userReducer,
  tickets: ticketsReducer,
  search: searchReducer
});
