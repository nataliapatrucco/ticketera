import { RECEIVE_USER, RECEIVE_USERS, FILTERED_USERS } from "../constants";
const initialState = { user: {}, users: [], filteredUsers: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_USER:
      return { ...state, user: action.user };
    case RECEIVE_USERS:
      return { ...state, users: action.users };
    case FILTERED_USERS:
      return { ...state, filteredUsers: action.filteredUsers };
    default:
      return state;
  }
};
