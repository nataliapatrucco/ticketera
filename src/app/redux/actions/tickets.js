import axios from "axios";
import { FETCH_OPEN, FETCH_PROCESSING } from "../constants";

const setOpen = open => ({
  type: FETCH_OPEN,
  open
});

const setProcessing = processing => ({
  type: FETCH_PROCESSING,
  processing
});

export const fetchOpen = () => dispatch =>
  axios
    .get("/api/status/1")
    .then(res => res.data)
    .then(tickets => dispatch(setOpen(tickets)));

export const fetchProcessing = () => dispatch =>
  axios
    .get("/api/status/2")
    .then(res => res.data)
    .then(tickets => dispatch(setProcessing(tickets)));
