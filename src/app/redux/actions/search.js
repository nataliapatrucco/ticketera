import axios from "axios";
import { SEARCH_TICKETS, FETCH_CLOSED } from "../constants";

const setSearched = searchedTickets => ({
  type: SEARCH_TICKETS,
  searchedTickets
});

const setClosed = tickets => ({
  type: FETCH_CLOSED,
  tickets
});

export const fetchClosed = () => dispatch =>
  axios.get("/api/ticket/search").then(res => {
    dispatch(setClosed(res.data));
  });

export const fetchSearchedTickets = title => dispatch =>
  axios.get(`/api/ticket/search?title=${title}`).then(res => {
    dispatch(setSearched(res.data));
  });
