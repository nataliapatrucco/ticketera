import { combineReducers } from "redux";
import userReducer from "../reducers/userReducer";
import searchReducer from "../reducers/searchReducer";

export default combineReducers({ user: userReducer, search: searchReducer });
