import axios from "axios";
import {
  FETCH_OPEN,
  FETCH_PROCESSING,
  FETCH_MY_TICKETS,
  FETCH_TICKET
} from "../constants";

import Socket from "../../socket";

const setOpen = open => ({
  type: FETCH_OPEN,
  open
});
const setTicket = single => ({
  type: FETCH_TICKET,
  single
});

const setProcessing = processing => ({
  type: FETCH_PROCESSING,
  processing
});

const setUserTickets = userTickets => ({
  type: FETCH_MY_TICKETS,
  userTickets
});

export const fetchOpen = () => dispatch =>
  axios
    .get("/api/ticket/status/1")
    .then(res => res.data)
    .then(tickets => dispatch(setOpen(tickets)));

export const fetchProcessing = () => dispatch =>
  axios
    .get("/api/ticket/status/2")
    .then(res => res.data)
    .then(tickets => dispatch(setProcessing(tickets)));

export const addParticipant = (ticketId, statusId) => dispatch =>
  axios
    .post("/api/ticket/participant", { ticketId, statusId })
    .then(res => res.data)
    .then(tickets => {
      if (tickets[0].statusId === 1) {
        return dispatch(setOpen(tickets));
      } else {
        return dispatch(setProcessing(tickets));
      }
    });

export const removeParticipant = (ticketId, statusId) => dispatch =>
  axios
    .put("/api/ticket/participant", { ticketId, statusId })
    .then(res => res.data)
    .then(tickets => {
      if (tickets[0].statusId === 1) {
        return dispatch(setOpen(tickets));
      } else {
        return dispatch(setProcessing(tickets));
      }
    });

const groupByStatus = array =>
  array.reduce((objectsByKeyValue, obj) => {
    const value = obj["statusId"];
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
    return objectsByKeyValue;
  }, {});

export const fetchUserTickets = () => dispatch =>
  axios
    .get("/api/ticket/userTickets")
    .then(res => res.data)
    .then(tickets => groupByStatus(tickets))
    .then(tickets => dispatch(setUserTickets(tickets)));

export const deleteTicket = ticket => dispatch => {
  Socket.emit("delete-ticket", ticket);
  return axios.delete(`/api/ticket/${ticket.id}`);
};

export const createNewTicket = ticket => axios.post("/api/ticket", ticket);

export const fetchTicket = slug => dispatch =>
  axios
    .get(`/api/ticket/${slug}`)
    .then(res => res.data)
    .then(ticket => dispatch(setTicket(ticket)));

export const answerTicket = (id, { description, status }) => dispatch => {
  return axios
    .put(`/api/status/${id}`, { description, status })
    .then(res => res.data)
    .then(ticket => Socket.emit("change-status", ticket));
};

export const createNewImage = (id, image) => {
  console.log("axioooooooooooooooooooooos", image);
  axios
    .put(`/api/ticket/images/test/${id}`, image, {
      // headers: {
      //   "Content-Type": "multipart/form-data",
      //   //charset: "utf-8",
      //   boundary: "----WebKitFormBoundaryyrV7KO0BoCBuDbTL"
      // }
    })
    .then(() => console.log("all good"))
    .catch(err => console.log("something wrong", err));
};
