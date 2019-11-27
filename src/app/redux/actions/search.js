import axios from "axios";
import { SEARCH } from "../constants";

const searchIt = search => {
  return {
    type: SEARCH,
    search
  };
};

export const search = searchResult => dispatch =>
  axios
    .get("/api/ticket/search", searchResult)
    .then(searchResult => dispatch(searchIt(searchResult.data)));
