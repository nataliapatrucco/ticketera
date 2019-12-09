import { combineReducers } from "redux";
import userReducer from "../reducers/userReducer";
import devpediaReducer from "../reducers/searchReducer";
import ticketsReducer from "../reducers/ticketReducer";

export default combineReducers({
  user: userReducer,
  tickets: ticketsReducer,
  devpedia: devpediaReducer
});
