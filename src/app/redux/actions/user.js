import axios from "axios";
import { RECEIVE_USER, RECEIVE_USERS, FILTERED_USERS } from "../constants";

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

const receiveFilteredUsers = filteredUsers => ({
  type: FILTERED_USERS,
  filteredUsers
});

export const loginUser = function(state) {
  return function(dispatch, getState) {
    return axios
      .post("/api/user/login", state)
      .then(res => res.data)
      .then(user => {
        dispatch(receiveUser(user));
      })
      .catch(err => {
        throw err;
      });
  };
};

export const registerUser = state => dispatch =>
  axios
    .post("/api/user/register", state)
    .then(res => res.data)
    .then(user => {
      dispatch(receiveUser(user));
    });

export const logOutUser = () => dispatch =>
  axios.get("/api/user/logout").then(() => {
    dispatch(receiveUser({}));
  });

export const fetchUser = () => dispatch =>
  axios.get("/api/user/me").then(res => {
    dispatch(receiveUser(res.data));
  });

export const fetchUsers = () => dispatch =>
  axios.get("/api/user/search").then(res => {
    dispatch(receiveUsers(res.data));
  });

export const fetchFilteredUsers = users => dispatch =>
  axios.get(`/api/user/search?name=${users}`).then(res => {
    dispatch(receiveFilteredUsers(res.data));
  });

export const setUserAsAdmin = (user, input) => dispatch =>
  axios
    .put(`/api/user/users/${user.id}`)
    .then(res => res.data)
    .then(users => {
      dispatch(receiveUsers(users));
      dispatch(fetchFilteredUsers(input));
    });

export const removeAdmin = (user, input) => dispatch =>
  axios
    .put(`/api/user/users/${user.id}`)
    .then(res => res.data)
    .then(users => {
      dispatch(receiveUsers(users));
      dispatch(fetchFilteredUsers(input));
    });
