import { FETCH_OPEN, FETCH_PROCESSING } from "../constants";
const initialState = { open: [], processing: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_OPEN:
      return { ...state, open: action.open };
    case FETCH_PROCESSING:
      return { ...state, processing: action.processing };
    default:
      return state;
  }
};
