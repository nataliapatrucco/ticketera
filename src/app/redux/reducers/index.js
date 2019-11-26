import { combineReducers } from "redux";
import userReducer from "../reducers/userReducer";
import ticketsReducer from "../reducers/ticketReducer";

export default combineReducers({ user: userReducer, tickets: ticketsReducer });
