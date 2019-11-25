import axios from "axios";
import RECEIVE_USER from "../constants";

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const loginUser = function({ email, password }) {
  return function(dispatch, getState) {
    return axios
      .post("/api/user/login", { email, password })
      .then(res => res.data)
      .then(user => {
        dispatch(receiveUser(user));
      })
      .catch(err => {
        throw err;
      });
  };
};

export const registerUser = ({ name, lastname, email, password }) => dispatch =>
  axios
    .post("/api/user/register", {
      name,
      lastname,
      email,
      password
    })
    .then(res => res.data)
    .then(user => {
      dispatch(receiveUser(user));
    });

export const logOutUser = () => dispatch =>
  axios.get("/api/user/logout").then(() => {
    dispatch(receiveUser({}));
  });
